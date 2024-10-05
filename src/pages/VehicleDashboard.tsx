import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, Button, Input, Label, Select } from "@/components/ui"
import { Car, Clock, CalendarDays, Search } from "lucide-react"

const mockVehicles = [
  { id: 1, name: "Vehicle 1", checkIn: "2024-10-05T14:30:00", checkOut: "2024-10-05T16:45:00", duration: 135 },
  // Add the rest of the vehicles
]

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })
}

function formatDuration(minutes: number) {
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  return `${hours}h ${mins}m`
}

export default function VehicleDashboard() {
  const [searchDate, setSearchDate] = useState("")
  const [filteredVehicles, setFilteredVehicles] = useState(mockVehicles)

  const handleSearch = () => {
    if (!searchDate) {
      setFilteredVehicles(mockVehicles)
      return
    }

    const filtered = mockVehicles.filter(vehicle => {
      const checkInDate = new Date(vehicle.checkIn)
      return checkInDate.toDateString() === new Date(searchDate).toDateString()
    })
    setFilteredVehicles(filtered)
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Vehicle Dashboard</h1>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Search Criteria</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="flex-1">
              <Label htmlFor="search-date">Date</Label>
              <Input
                id="search-date"
                type="date"
                value={searchDate}
                onChange={(e) => setSearchDate(e.target.value)}
              />
            </div>
            <div className="flex items-end">
              <Button onClick={handleSearch}>
                <Search className="mr-2 h-4 w-4" /> Search
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Vehicles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{filteredVehicles.length}</div>
          </CardContent>
        </Card>
        {/* Add other cards for Last Check-In, Last Check-Out, Average Duration */}
      </div>
    </div>
  )
}
