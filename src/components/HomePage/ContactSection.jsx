import { useState } from "react";
import { Typography } from "@material-tailwind/react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const locations = [
  {
    id: 1,
    name: "OPHTALMOLOGY SHOP",
    address: "34 88th St, Flushing, NY 11372",
    email: "neoocular1@qodeinetractive.com",
    tel: "(+971) 204 2033 6611",
    coordinates: { lat: 40.7549, lng: -73.8841 },
  },
  {
    id: 2,
    name: "OCULUS CLINIC",
    address: "41 Gleane St, Queens, NY 11373",
    email: "neoocular2@qodeinetractive.com",
    tel: "(+971) 205 2033 6611",
    coordinates: { lat: 40.7489, lng: -73.8801 },
  },
  {
    id: 3,
    name: "NEO OCULAR",
    address: "23 100th St, Flushing, NY 11369",
    email: "neoocular3@qodeinetractive.com",
    tel: "(+971) 206 2033 6611",
    coordinates: { lat: 40.7559, lng: -73.8721 },
  },
  {
    id: 4,
    name: "PRIME VISION",
    address: "22 98th St, Flushing, NY 11369",
    email: "neoocular4@qodeinetractive.com",
    tel: "(+971) 207 2033 6611",
    coordinates: { lat: 40.7469, lng: -73.8761 },
  },
];

const mapContainerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 40.7509,
  lng: -73.8781,
};

export default function ContactSection() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <section id="contact" className="py-16  bg-black text-primary">
      <div className=" mx-auto ss:px-12 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Location Information */}
          <div className="space-y-8">
            <div>
              <Typography
                variant="h2"
                className="ss:text-3xl xs:text-2xl text-xl font-bold mb-2"
              >
                RELIEF FROM EYE DISCOMFORT
              </Typography>
              <Typography variant="paragraph" className="text-primary mb-8 ">
                Visit one of our medical centers and get the help you need.
              </Typography>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {locations.map((location) => (
                <div
                  key={location.id}
                  className={`space-y-2 p-4 rounded-lg transition-colors cursor-pointer
                    ${
                      selectedLocation?.id === location.id
                        ? "bg-blue-50"
                        : "hover:bg-secondary"
                    }`}
                  onClick={() => setSelectedLocation(location)}
                >
                  <Typography variant="h6" className="font-bold">
                    {location.name}
                  </Typography>
                  <Typography variant="small" className="block text-primary">
                    {location.address}
                  </Typography>
                  <Typography variant="small" className="block text-accent">
                    {location.email}
                  </Typography>
                  <Typography variant="small" className="block text-primary">
                    tel: {location.tel}
                  </Typography>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <LoadScript googleMapsApiKey="https://maps.app.goo.gl/ZEY4dKabBSKKpSm9A">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={selectedLocation?.coordinates || center}
                zoom={13}
              >
                {locations.map((location) => (
                  <Marker
                    key={location.id}
                    position={location.coordinates}
                    onClick={() => setSelectedLocation(location)}
                  />
                ))}
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </div>
    </section>
  );
}
