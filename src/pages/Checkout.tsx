
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const steps = ["Delivery", "Payment", "Review"];

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="pt-4 pb-32 animate-fade-in">
      <h1 className="text-2xl font-semibold mb-6">Checkout</h1>
      
      <div className="flex justify-between mb-8">
        {steps.map((step, index) => (
          <div
            key={step}
            className={`flex-1 text-center ${
              index === currentStep
                ? "text-black"
                : index < currentStep
                ? "text-gray-600"
                : "text-gray-400"
            }`}
          >
            <div
              className={`w-8 h-8 mx-auto mb-2 rounded-full flex items-center justify-center ${
                index <= currentStep ? "bg-black text-white" : "bg-gray-200"
              }`}
            >
              {index + 1}
            </div>
            <span className="text-sm">{step}</span>
          </div>
        ))}
      </div>

      {currentStep === 0 && (
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="John Doe" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input id="address" placeholder="123 Main St" />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input id="city" placeholder="City" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="zip">ZIP Code</Label>
              <Input id="zip" placeholder="ZIP" />
            </div>
          </div>

          <div className="space-y-4">
            <Label>Delivery Method</Label>
            <RadioGroup defaultValue="standard">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="standard" id="standard" />
                <Label htmlFor="standard">Standard Delivery (3-5 days) - Free</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="express" id="express" />
                <Label htmlFor="express">Express Delivery (1-2 days) - $9.99</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      )}

      <div className="fixed bottom-16 left-0 right-0 bg-white border-t p-4">
        <div className="container mx-auto">
          <Button
            className="w-full"
            size="lg"
            onClick={() => setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev))}
          >
            {currentStep === steps.length - 1 ? "Place Order" : "Continue"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
