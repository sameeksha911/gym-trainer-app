"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AppTopbar } from "@/components/app-topbar"
import { Plus, Edit, Trash2, Star, Upload, X, MessageSquare } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface Testimonial {
  id: number
  clientName: string
  reviewText: string
  rating: number
  beforeImage: string
  afterImage: string
  dateAdded: string
}

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      id: 1,
      clientName: "John Smith",
      reviewText: "Lost 30 lbs in 3 months! The personalized training program was exactly what I needed.",
      rating: 5,
      beforeImage: "/before-transformation-overweight-man.jpg",
      afterImage: "/after-transformation-fit-muscular-man.jpg",
      dateAdded: "2024-01-15",
    },
    {
      id: 2,
      clientName: "Sarah Johnson",
      reviewText: "Transformed my body and mindset. Best decision I ever made!",
      rating: 5,
      beforeImage: "/before-transformation-woman-unfit.jpg",
      afterImage: "/after-transformation-fit-athletic-woman.jpg",
      dateAdded: "2024-02-20",
    },
    {
      id: 3,
      clientName: "Mike Anderson",
      reviewText: "Gained 15 lbs of muscle in 4 months. The nutrition and workout plan was perfect!",
      rating: 5,
      beforeImage: "/before-transformation-skinny-man.jpg",
      afterImage: "/after-transformation-muscular-athletic-man.jpg",
      dateAdded: "2024-03-10",
    },
  ])

  const [isAddingNew, setIsAddingNew] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    clientName: "",
    reviewText: "",
    rating: 5,
    beforeImage: "",
    afterImage: "",
  })

  const handleAddNew = () => {
    setIsAddingNew(true)
    setEditingId(null)
    setFormData({
      clientName: "",
      reviewText: "",
      rating: 5,
      beforeImage: "",
      afterImage: "",
    })
  }

  const handleEdit = (testimonial: Testimonial) => {
    setEditingId(testimonial.id)
    setIsAddingNew(false)
    setFormData({
      clientName: testimonial.clientName,
      reviewText: testimonial.reviewText,
      rating: testimonial.rating,
      beforeImage: testimonial.beforeImage,
      afterImage: testimonial.afterImage,
    })
  }

  const handleSave = () => {
    if (editingId) {
      setTestimonials(testimonials.map((t) => (t.id === editingId ? { ...t, ...formData } : t)))
    } else {
      const newTestimonial: Testimonial = {
        id: Date.now(),
        ...formData,
        dateAdded: new Date().toISOString().split("T")[0],
      }
      setTestimonials([...testimonials, newTestimonial])
    }
    handleCancel()
  }

  const handleCancel = () => {
    setIsAddingNew(false)
    setEditingId(null)
    setFormData({
      clientName: "",
      reviewText: "",
      rating: 5,
      beforeImage: "",
      afterImage: "",
    })
  }

  const handleDelete = (id: number) => {
    setTestimonials(testimonials.filter((t) => t.id !== id))
  }

  const renderStars = (rating: number, interactive = false) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => interactive && setFormData({ ...formData, rating: star })}
            className={interactive ? "cursor-pointer" : "cursor-default"}
          >
            <Star className={`h-5 w-5 ${star <= rating ? "fill-amber-400 text-amber-400" : "text-zinc-600"}`} />
          </button>
        ))}
      </div>
    )
  }

  return (
    <>
      <AppTopbar title="Testimonials" subtitle="Manage client testimonials and transformations" />

      <main className="flex-1 overflow-auto p-6">
        <Card className="bg-zinc-900 border-zinc-800 mb-6">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-zinc-100">Client Testimonials</h2>
                <p className="text-sm text-zinc-500">Showcase transformations and success stories</p>
              </div>
              {!isAddingNew && !editingId && (
                <Button onClick={handleAddNew} className="bg-cyan-500 hover:bg-cyan-600 text-zinc-950 font-semibold">
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Testimonial
                </Button>
              )}
            </div>

            {(isAddingNew || editingId) && (
              <Card className="bg-zinc-800 border-zinc-700 mb-6">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-zinc-100">
                      {editingId ? "Edit Testimonial" : "Add New Testimonial"}
                    </h3>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleCancel}
                      className="text-zinc-400 hover:text-zinc-100"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="clientName" className="text-zinc-300">
                          Client Name
                        </Label>
                        <Input
                          id="clientName"
                          value={formData.clientName}
                          onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                          placeholder="Enter client name"
                          className="bg-zinc-900 border-zinc-700 text-zinc-100 mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="reviewText" className="text-zinc-300">
                          Review Text
                        </Label>
                        <Textarea
                          id="reviewText"
                          value={formData.reviewText}
                          onChange={(e) => setFormData({ ...formData, reviewText: e.target.value })}
                          placeholder="Enter client's review or testimonial..."
                          rows={4}
                          className="bg-zinc-900 border-zinc-700 text-zinc-100 mt-1"
                        />
                      </div>

                      <div>
                        <Label className="text-zinc-300 mb-2 block">Star Rating</Label>
                        {renderStars(formData.rating, true)}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="beforeImage" className="text-zinc-300">
                          Before Image URL
                        </Label>
                        <div className="flex gap-2 mt-1">
                          <Input
                            id="beforeImage"
                            value={formData.beforeImage}
                            onChange={(e) => setFormData({ ...formData, beforeImage: e.target.value })}
                            placeholder="/path/to/before-image.jpg"
                            className="bg-zinc-900 border-zinc-700 text-zinc-100"
                          />
                          <Button
                            variant="outline"
                            size="icon"
                            className="border-zinc-700 text-zinc-400 hover:text-zinc-100 bg-transparent"
                          >
                            <Upload className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="afterImage" className="text-zinc-300">
                          After Image URL
                        </Label>
                        <div className="flex gap-2 mt-1">
                          <Input
                            id="afterImage"
                            value={formData.afterImage}
                            onChange={(e) => setFormData({ ...formData, afterImage: e.target.value })}
                            placeholder="/path/to/after-image.jpg"
                            className="bg-zinc-900 border-zinc-700 text-zinc-100"
                          />
                          <Button
                            variant="outline"
                            size="icon"
                            className="border-zinc-700 text-zinc-400 hover:text-zinc-100 bg-transparent"
                          >
                            <Upload className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end gap-3 mt-6">
                    <Button
                      variant="outline"
                      onClick={handleCancel}
                      className="border-zinc-700 text-zinc-300 bg-transparent"
                    >
                      Cancel
                    </Button>
                    <Button onClick={handleSave} className="bg-cyan-500 hover:bg-cyan-600 text-zinc-950 font-semibold">
                      {editingId ? "Update Testimonial" : "Save Testimonial"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="bg-zinc-800 border-zinc-700">
                  <CardContent className="p-4">
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div>
                        <p className="text-xs text-zinc-500 mb-1">Before</p>
                        <div className="aspect-[3/4] bg-zinc-900 rounded-lg overflow-hidden">
                          <img
                            src={testimonial.beforeImage || "/placeholder.svg"}
                            alt={`${testimonial.clientName} before`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-zinc-500 mb-1">After</p>
                        <div className="aspect-[3/4] bg-zinc-900 rounded-lg overflow-hidden">
                          <img
                            src={testimonial.afterImage || "/placeholder.svg"}
                            alt={`${testimonial.clientName} after`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-zinc-100">{testimonial.clientName}</h3>
                        {renderStars(testimonial.rating)}
                      </div>

                      <p className="text-sm text-zinc-400 line-clamp-3">{testimonial.reviewText}</p>

                      <div className="flex items-center justify-between pt-2 border-t border-zinc-700">
                        <Badge variant="outline" className="bg-zinc-900/50 text-zinc-500 border-zinc-700">
                          Added {new Date(testimonial.dateAdded).toLocaleDateString()}
                        </Badge>
                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleEdit(testimonial)}
                            className="h-8 w-8 text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10"
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDelete(testimonial.id)}
                            className="h-8 w-8 text-red-400 hover:text-red-300 hover:bg-red-500/10"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {testimonials.length === 0 && !isAddingNew && (
              <div className="text-center py-12">
                <MessageSquare className="h-12 w-12 text-zinc-700 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-zinc-400 mb-2">No Testimonials Yet</h3>
                <p className="text-sm text-zinc-500 mb-4">
                  Start adding client testimonials to showcase transformations
                </p>
                <Button onClick={handleAddNew} className="bg-cyan-500 hover:bg-cyan-600 text-zinc-950 font-semibold">
                  <Plus className="h-4 w-4 mr-2" />
                  Add First Testimonial
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </>
  )
}
