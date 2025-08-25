"use client"

import React, { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

interface ReviewItem {
  image: string
  text: string
}

interface HoverExpandProps {
  reviews: ReviewItem[]
  initialSelectedIndex?: number
  thumbnailHeight?: number
  modalImageSize?: number
  maxThumbnails?: number
}

export function HoverExpand({
  reviews,
  initialSelectedIndex = 0,
  thumbnailHeight = 300,
  modalImageSize = 500,
  maxThumbnails = 11,
}: HoverExpandProps) {
  const [selectedIndex, setSelectedIndex] =
    useState<number>(initialSelectedIndex)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false)
      }
    }

    if (isModalOpen) {
      document.body.classList.add("overflow-hidden")
      document.addEventListener("keydown", handleKeyDown)
    } else {
      document.body.classList.remove("overflow-hidden")
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.classList.remove("overflow-hidden")
    }
  }, [isModalOpen])

  return (
    <div className="relative w-full overflow-hidden">
      <div className="mx-auto flex w-full max-w-full gap-1 sm:gap-2 md:gap-3 rounded-md pb-10 sm:pb-16 md:pb-20 pt-5 sm:pt-8 md:pt-10 px-2 sm:px-4 justify-center">
        {reviews.slice(0, maxThumbnails).map((review, i) => (
          <div
            key={`image-container-${i}`}
            className={`group relative h-48 sm:h-64 md:h-80 overflow-hidden rounded-xl sm:rounded-2xl transition-all duration-200 ease-out flex-shrink-0 ${
              selectedIndex === i ? "w-48 sm:w-64 md:w-80" : "w-4 sm:w-6 md:w-8 lg:w-12 xl:w-16"
            }`}
            onMouseEnter={() => setSelectedIndex(i)}
            onMouseLeave={() => setSelectedIndex(i)}
            onClick={() => {
              setSelectedIndex(i)
              setIsModalOpen(true)
            }}
          >
            <div className="absolute inset-0 size-full">
              <img
                src={review.image}
                alt={`Review ${i + 1}`}
                className="size-full object-cover transition-transform duration-200 ease-out"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 grid place-content-center bg-white/40 backdrop-blur-sm dark:bg-black/40 p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
              className="cursor-pointer overflow-hidden rounded-xl sm:rounded-2xl bg-black max-w-sm sm:max-w-2xl lg:max-w-3xl w-full mx-auto"
            >
              <div className="relative w-full h-48 sm:h-64 md:h-[500px]">
                <img
                  src={reviews[selectedIndex].image}
                  alt={`Review ${selectedIndex + 1}`}
                  className="absolute left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 object-cover"
                  loading="eager"
                />
              </div>
              <div className="p-4 sm:p-6 md:p-8 bg-white text-gray-800">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                  <p className="text-sm sm:text-base md:text-xl leading-relaxed italic break-words">
                    "{reviews[selectedIndex].text}"
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 