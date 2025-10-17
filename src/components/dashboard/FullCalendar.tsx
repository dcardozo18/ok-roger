"use client"

import * as React from "react"
import { addMonths, format, getDaysInMonth, isSameDay, isToday, startOfMonth, subMonths } from "date-fns"
import { ChevronLeft, ChevronRight, Plus } from "lucide-react"

import type { CalendarEvent, EventType } from "@/lib/calendar-data"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface FullCalendarProps {
  events: CalendarEvent[]
  eventTypes: EventType[]
}

const WEEK_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

export function FullCalendar({ events, eventTypes }: FullCalendarProps) {
  const [currentDate, setCurrentDate] = React.useState(new Date(2025, 9, 1))
  const [activeFilters, setActiveFilters] = React.useState<string[]>(eventTypes.map(et => et.id))

  const firstDayOfMonth = startOfMonth(currentDate)
  const daysInMonth = getDaysInMonth(currentDate)
  const startingDay = firstDayOfMonth.getDay()

  const handlePrevMonth = () => {
    setCurrentDate(prev => subMonths(prev, 1))
  }

  const handleNextMonth = () => {
    setCurrentDate(prev => addMonths(prev, 1))
  }

  const handleToday = () => {
    setCurrentDate(new Date())
  }
  
  const toggleFilter = (eventTypeId: string) => {
    setActiveFilters(prev => 
      prev.includes(eventTypeId) 
        ? prev.filter(id => id !== eventTypeId) 
        : [...prev, eventTypeId]
    )
  }

  const filteredEvents = events.filter(event => activeFilters.includes(event.type));

  const getEventTypeColor = (typeId: string) => {
    return eventTypes.find(et => et.id === typeId)?.color || "bg-gray-500"
  }

  const renderDays = () => {
    const days = []
    for (let i = 0; i < startingDay; i++) {
      days.push(<div key={`empty-${i}`} className="border-r border-b p-2"></div>)
    }
    for (let i = 1; i <= daysInMonth; i++) {
      const dayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), i)
      const eventsForDay = filteredEvents.filter(event => isSameDay(new Date(event.date), dayDate))
      
      days.push(
        <div key={i} className={cn("border-r border-b p-2 relative h-32", isToday(dayDate) && "bg-blue-50")}>
          <span className="text-sm">{i}</span>
          <div className="mt-1 space-y-1">
            {eventsForDay.map(event => (
              <div 
                key={event.id}
                className={cn(
                  "text-white text-xs rounded-md p-1 truncate", 
                  getEventTypeColor(event.type)
                )}
              >
                {event.title}
              </div>
            ))}
          </div>
        </div>
      )
    }
    return days
  }

  return (
    <div className="bg-card p-4 sm:p-6 rounded-lg shadow-sm">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <div className="flex flex-wrap items-center gap-2">
          {eventTypes.map(eventType => (
            <Button 
              key={eventType.id}
              onClick={() => toggleFilter(eventType.id)}
              variant={activeFilters.includes(eventType.id) ? "default" : "outline"}
              size="sm"
              style={{
                backgroundColor: activeFilters.includes(eventType.id) ? `hsl(var(--${eventType.id}-color))` : undefined,
                color: activeFilters.includes(eventType.id) ? `hsl(var(--${eventType.id}-foreground-color))` : undefined,
                borderColor: `hsl(var(--${eventType.id}-color))`
              }}
              className="border"
            >
              {eventType.label}
            </Button>
          ))}
        </div>
        
        <div className="flex items-center justify-center flex-1 min-w-[200px]">
          <Button variant="ghost" size="icon" onClick={handlePrevMonth}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" className="mx-2" onClick={handleToday}>
            Today
          </Button>
          <Button variant="ghost" size="icon" onClick={handleNextMonth}>
            <ChevronRight className="h-4 w-4" />
          </Button>
          <h2 className="text-lg font-semibold ml-4">{format(currentDate, "MMMM yyyy")}</h2>
        </div>

        <div className="flex items-center gap-2">
           <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Event
          </Button>
          <div className="hidden sm:flex items-center border rounded-md">
             <Button variant="ghost" size="sm" className="rounded-r-none">month</Button>
             <Button variant="ghost" size="sm" className="border-l rounded-none">week</Button>
             <Button variant="ghost" size="sm" className="border-l rounded-l-none">day</Button>
          </div>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 calendar-grid">
        {WEEK_DAYS.map(day => (
          <div key={day} className="text-center font-medium text-sm text-muted-foreground border-b border-r p-2">{day}</div>
        ))}
        {renderDays()}
      </div>
    </div>
  )
}
