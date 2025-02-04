"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/Card";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { Checkbox } from "@/components/Checkbox";
import { Slider } from "@/components/Slider";
import { RangeSlider } from "@/components/RangeSlider";
import { Toggle } from "@/components/Toggle";
import StarRating from "../StarRating";

interface Amenities {
  pool: boolean;
  sauna: boolean;
  jacuzzi: boolean;
}

const FilterComponent: React.FC = () => {
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [rating, setRating] = useState<string[]>([]);
  const [is24Hours, setIs24Hours] = useState<boolean>(false);
  const [price, setPrice] = useState<number>(50);
  const [priceType, setPriceType] = useState<"daily" | "monthly">("daily");
  const [openHours, setOpenHours] = useState<[number, number]>([6, 22]);
  const [amenities, setAmenities] = useState<Amenities>({
    pool: false,
    sauna: false,
    jacuzzi: false,
  });

  const handleAmenityChange = (amenity: keyof Amenities) => {
    setAmenities({ ...amenities, [amenity]: !amenities[amenity] });
  };

  const handleChangeHours = (value: [number, number]) => {
    setOpenHours(value);
  };

  const handleFilter = () => {
    console.log({
      searchTerm,
      rating,
      is24Hours,
      price,
      priceType,
      openHours,
      amenities,
    });
  };

  return (
    <>
      {!showFilter ? (
        <Button
          onClick={() => setShowFilter(true)}
          className="absolute top-6 right-24 mt-2 mr-2 z-10 px-4 py-2"
        >
          <span className="text-sm">Show filters</span>
        </Button>
      ) : (
        <Card className="py-0 text-gray-800 h-full shadow-none absolute z-10 top-5 right-24 bg-white/80 rounded-none">
          <CardContent>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Filters</h2>
              <button
                className="text-blue-500 px-4 py-2 border-0 hover:text-blue-700"
                onClick={() => setShowFilter(false)}
              >
                Close
              </button>
            </div>

            <div className="space-y-4">
              <Input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search gym"
                className="w-full"
              />

              <div>
                <label className="block text-sm font-medium mb-1">Stars</label>
                <div className="flex flex-col gap-2">
                  {["5", "4", "3", "2", "1", "0"].map((star) => (
                    <div key={star} className="flex items-center gap-2">
                      <Checkbox
                        id={`star-${star}`}
                        checked={rating.includes(star)}
                        onCheckedChange={() =>
                          setRating((prev) =>
                            prev.includes(star)
                              ? prev.filter((r) => r !== star)
                              : [...prev, star]
                          )
                        }
                      />
                      <label
                        htmlFor={`star-${star}`}
                        className="text-sm font-medium"
                      >
                        <StarRating rating={parseInt(star)} size={16} />
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium">
                  Open hours: {openHours[0]}-{openHours[1]}
                </label>
                <RangeSlider
                  values={openHours}
                  onChange={handleChangeHours}
                  max={24}
                  min={0}
                  step={1}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Price ({priceType})
                </label>
                <Slider min={10} max={300} value={price} onChange={setPrice} />
                <Toggle
                  checked={priceType === "monthly"}
                  onChange={(value) =>
                    setPriceType(value ? "monthly" : "daily")
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Amenities
                </label>
                <div className="flex flex-col gap-2">
                  {Object.keys(amenities).map((amenity) => (
                    <div key={amenity} className="flex items-center gap-2">
                      <Checkbox
                        id={amenity}
                        checked={amenities[amenity as keyof Amenities]}
                        onCheckedChange={() =>
                          handleAmenityChange(amenity as keyof Amenities)
                        }
                      />
                      <label
                        htmlFor={amenity}
                        className="text-sm font-medium capitalize"
                      >
                        {amenity === "pool"
                          ? "Basen"
                          : amenity === "sauna"
                          ? "Sauna"
                          : "Jacuzzi"}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Button onClick={handleFilter} className="w-full mt-4">
                  Apply
                </Button>
                <Button
                  className="bg-white/0 w-full px-4 py-2 border-0 hover:bg-white/0 hover:text-blue-800"
                  onClick={() => {
                    setSearchTerm("");
                    setRating([]);
                    setIs24Hours(false);
                    setPrice(50);
                    setPriceType("daily");
                    setOpenHours([6, 22]);
                    setAmenities({ pool: false, sauna: false, jacuzzi: false });
                  }}
                >
                  <span className="text-blue-500">Reset</span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default FilterComponent;
