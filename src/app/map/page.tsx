import Filter from "@/feature/Filter";
import Map from "@/feature/Map";

const MapPage = () => {
  return (
    <div className="flex items-center justify-between px-24 py-5 flex-grow h-96 overflow-hidden relative">
      <Filter />
      <Map />
    </div>
  );
};

export default MapPage;
