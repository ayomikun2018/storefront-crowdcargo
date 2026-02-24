"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@repo/ui";
import { MapPinIcon, Button, Input } from "@repo/ui";
import { MapPin, X } from "lucide-react";

const dummySuggestions = [
  { name: "Ojota Bus Stop", city: "Lagos" },
  { name: "Lasucom", city: "Ikeja, Lagos" },
  { name: "Maryland Mall", city: "Lagos" },
  { name: "Ikeja City Mall", city: "Ikeja" },
];

const AppSidebarAddress = () => {
  const [address, setAddress] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Filter suggestions dynamically
  const filteredSuggestions = dummySuggestions.filter((s) =>
    s.name.toLowerCase().includes(address.toLowerCase()),
  );

  const handleSave = () => {
    // You can do anything here later with the selected address
    setShowSuggestions(true);
  };

  return (
    <div className="relative w-full">
      <Dialog>
        <DialogTrigger asChild>
          <div className="bg-gray-100 flex md:justify-between border border-dashed cursor-pointer">
            <Image
              src="/assets/location-icon.svg"
              width={90}
              height={90}
              alt="location icon"
              className="size-18 ml-[-12px]"
            />
            <div className="flex flex-col gap-1">
              <div className="flex items-center md:justify-center pl-2 md:pl-0 border border-amber-600 w-52 h-9 md:py-2 py-1 rounded-3xl bg-[#E186011A] text-foreground mr-3 mt-2">
                <p className="flex gap-3 text-amber-600">
                  <MapPinIcon className="text-amber-600 size-6" />
                  Enter Address
                </p>
              </div>
              <p className="text-muted-foreground text-[13px]">
                Help us personalize your dashboard
              </p>
            </div>
          </div>
        </DialogTrigger>

        <DialogContent className="md:max-w-2xl w-[90vw] md:w-auto">
          <DialogHeader className="p-4 pb-0 space-y-1 ">
            <DialogTitle className="text-xl font-bold">
              Enter Your Address
            </DialogTitle>
            <DialogDescription className="text-sm text-gray-500">
              Please enter your address to help us personalize your shopping and
              delivery experience
            </DialogDescription>
          </DialogHeader>

          <hr className="border-t border-gray-300" />

          <div className="p-4 pt-4">
            {/* Input */}
            <div className="flex items-center space-x-2">
              <div className="relative flex-grow">
                {/* <span className="absolute inset-y-3.5 left-3 size-4 rounded-full bg-primary" /> */}

                <Input
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                    setShowSuggestions(true);
                  }}
                  type="text"
                  className="w-full bg-blue-50 border-blue-50 py-6  pr-12 text-base rounded-lg"
                  onBlur={() => setShowSuggestions(false)}
                />

                {/* Clear button */}
                {address && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      setAddress("");
                      setShowSuggestions(false);
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-red-500"
                  >
                    <X className="w-4 h-4 text-red-600" />
                  </Button>
                )}
              </div>

              {/* Save button */}
              <Button
                className=" bg-primary rounded-full text-white font-semibold py-6 px-6  text-base"
                onClick={handleSave}
              >
                Save
              </Button>
            </div>
            {/* Use My Location / Current Location */}
            <div className="flex items-center space-x-3 py-4 cursor-pointer">
              <div className="w-6 h-6 bg-gray-200 " />{" "}
              {/* Placeholder for the unchecked checkbox */}
              <span className="text-primary font-medium">Use my Location</span>
            </div>
            {/* Suggestions */}
            {showSuggestions && address && (
              <div className="mt-4 border-t pt-2 space-y-2">
                {filteredSuggestions.length === 0 && (
                  <p className="text-sm text-gray-500">No matches found.</p>
                )}

                {filteredSuggestions.map((s, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-3 py-2 border-b cursor-pointer hover:bg-gray-50"
                    onClick={() => {
                      setAddress(s.name);
                      setShowSuggestions(false);
                    }}
                  >
                    <div className="p-2 border rounded-md text-blue-600 bg-blue-50">
                      <MapPinIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold">{s.name}</div>
                      <div className="text-sm text-gray-500">{s.city}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AppSidebarAddress;
