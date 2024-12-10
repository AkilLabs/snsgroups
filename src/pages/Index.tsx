import { Building, Laptop, MapPin, School, Dumbbell } from "lucide-react";
import { Logo } from "@/components/Logo";
import { MenuItem } from "@/components/MenuItem";
// import { Footer } from "@/components/Footer";
import  Header  from "@/components/Header";
import Footer from "@/components/Footer";

const menuItems = [
  {
    icon: Building,
    title: "SNS Venture Capital & Investment",
    color: "#E10485",
    bgColor: "#FFE5E5"
  },
  {
    icon: Laptop,
    title: "SNS Square Technologies",
    color: "#EB510B",
    bgColor: "#F0FFF0"
  },
  {
    icon: MapPin,
    title: "SNS Innovation Hub",
    color: "#01A3D4",
    bgColor: "#FFE6F3"
  },
  {
    icon: School,
    title: "SNS Institutions",
    color: "#DE2A1B",
    bgColor: "#FFF0E6"
  },
  {
    icon: Dumbbell,
    title: "SNS Spine",
    color: "#B0B402",
    bgColor: "#E6FFFA"
  }
];

  const Index = () => {
    return (
      <div className="min-h-screenx " > 
        <Header />
        <div className="max-w-6xl mx-auto px-50 py-1 mt-16">
          <div className="relative flex justify-center items-center min-h-[600px]">
            {/* Logo in the center */}
            <div className="absolute left-3 z-5">
              <Logo className="animate-fade-in" />
            </div>
            
            {/* Menu items in a semi-circle */}
            <div className="absolute left-[1px] h-full flex items-center">
              <div className="relative h-[500px] w-[500px]">
                {menuItems.map((item, index) => {
                  // Calculate position on the semi-circle
                  const angle = -50 + (index * 25); // Spread items from -60° to 60°
                  const radian = angle/45;
                  const radius = 215; // Radius of the semi-circle
                  
                  // Calculate x and y positions
                  const x = Math.cos(radian) * radius;
                  const y = Math.sin(radian) * radius;
                  
                  return (
                    <div
                      key={item.title}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-fade-in"
                      style={{
                        left: `${radius + x}px`,
                        top: `${radius + y}px`,
                        animationDelay: `${index * 0.1}s`,
                        width: '350px' // Fixed width for menu items
                      }}
                    >
                      <MenuItem {...item} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  };
    
  export default Index;
