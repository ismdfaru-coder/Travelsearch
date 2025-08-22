import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Plane, TrendingUp, MapPin, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import FlightSearchForm from "../components/search/FlightSearchForm";

export default function FlightSearchPage() {
  const navigate = useNavigate();

  const handleSearch = (searchData) => {
    // Navigate to results page with search parameters
    const params = new URLSearchParams({
      from: searchData.from.code,
      fromCity: searchData.from.city,
      to: searchData.to.code,
      toCity: searchData.to.city,
      depart: searchData.departDate,
      return: searchData.returnDate || "",
      passengers: JSON.stringify(searchData.passengers),
      class: searchData.cabinClass,
      tripType: searchData.tripType
    });
    
    navigate(`${createPageUrl("FlightResults")}?${params.toString()}`);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-transparent"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 border border-white/10 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <Plane className="w-8 h-8 transform -rotate-45" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Find the best flight deals
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
              Search hundreds of airlines and travel sites to find the cheapest flights
            </p>
          </div>

          {/* Search Form */}
          <FlightSearchForm onSearch={handleSearch} />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why choose our flight search?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We compare millions of flights to find you the best deals from hundreds of airlines and travel sites
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Best prices guaranteed
                </h3>
                <p className="text-gray-600">
                  We search hundreds of airlines and travel sites so you don't have to. Find the cheapest flights with just one search.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Anywhere to anywhere
                </h3>
                <p className="text-gray-600">
                  Search flights to any destination worldwide. From local airports to international hubs, we've got you covered.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Trusted by millions
                </h3>
                <p className="text-gray-600">
                  Join millions of travelers who trust us to find the best flight deals. Fast, reliable, and completely free to use.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular destinations
            </h2>
            <p className="text-gray-600">
              Discover amazing places around the world with great flight deals
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { city: "Paris", country: "France", price: "£89", image: "paris" },
              { city: "New York", country: "USA", price: "£312", image: "newyork" },
              { city: "Tokyo", country: "Japan", price: "£567", image: "tokyo" },
              { city: "Barcelona", country: "Spain", price: "£67", image: "barcelona" },
              { city: "Amsterdam", country: "Netherlands", price: "£78", image: "amsterdam" },
              { city: "Dubai", country: "UAE", price: "£234", image: "dubai" },
              { city: "Sydney", country: "Australia", price: "£623", image: "sydney" },
              { city: "Rome", country: "Italy", price: "£95", image: "rome" }
            ].map((destination, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group">
                <div className="relative h-32 bg-gradient-to-br from-blue-500 to-purple-600">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="font-semibold">{destination.city}</div>
                    <div className="text-sm opacity-90">{destination.country}</div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="text-blue-600 font-bold">
                    from {destination.price}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
