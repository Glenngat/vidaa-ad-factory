import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Play, CheckCircle, Users, Clock, Shield, Star } from "lucide-react";

const HomePage = () => {
  const primaryMessage = "Hi Mavidaa! I want to get a custom video ad sample for my business. Please send me the details and pricing!";
  const secondaryMessage = "Hi Mavidaa! I want to describe my ideal video ad and get a custom quote. Can you help me?";

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bebas text-foreground mb-6 leading-tight">
              Your Competitors Are Using 
              <span className="text-accent block">Video Ads</span>
              —Why Aren't You?
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-roboto">
              Get a Custom Video Ad Sample for Just <span className="text-accent font-bold">$97</span>—or Describe Your Vision & We'll Quote You Instantly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <WhatsAppButton 
                message={primaryMessage}
                variant="primary"
                className="w-full sm:w-auto"
              >
                Get My Video Ad Sample Now
              </WhatsAppButton>
              
              <Link to="/describe" className="w-full sm:w-auto">
                <Button variant="gold" size="lg" className="w-full">
                  Describe Your Ad → Get Quote
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <Badge variant="secondary" className="px-4 py-2 text-lg">
                <Shield className="mr-2 h-4 w-4" />
                100% Money-Back Guarantee
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-lg">
                <Clock className="mr-2 h-4 w-4" />
                24-Hour Delivery
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-lg">
                <Users className="mr-2 h-4 w-4" />
                Trusted by 500+ Brands
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bebas text-center mb-12">What Our Clients Say</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="card-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-card-foreground mb-4 font-roboto">
                  "Mavidaa's ads tripled my sales in just 2 weeks! The quality is incredible and the turnaround time is unmatched."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-3">
                    <span className="text-secondary-foreground font-bold">SJ</span>
                  </div>
                  <div>
                    <p className="font-semibold">Sarah Johnson</p>
                    <p className="text-muted-foreground text-sm">E-commerce Owner</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-card-foreground mb-4 font-roboto">
                  "Finally found a team that understands conversion! Our click-through rates increased by 400%."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-3">
                    <span className="text-secondary-foreground font-bold">MR</span>
                  </div>
                  <div>
                    <p className="font-semibold">Mike Rodriguez</p>
                    <p className="text-muted-foreground text-sm">Real Estate Agent</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-card-foreground mb-4 font-roboto">
                  "Best investment I've made for my gym. The video ads bring in 10+ new members monthly!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-3">
                    <span className="text-secondary-foreground font-bold">LT</span>
                  </div>
                  <div>
                    <p className="font-semibold">Lisa Thompson</p>
                    <p className="text-muted-foreground text-sm">Gym Owner</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bebas mb-12">Stop Wasting Money on Ads That Don't Convert</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-urgent rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="h-8 w-8 text-urgent-foreground" />
              </div>
              <h3 className="text-xl font-bebas mb-2">Tired of Expensive Studios?</h3>
              <p className="text-muted-foreground font-roboto">
                Get professional video ads without the $5,000+ studio costs
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-urgent rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-urgent-foreground" />
              </div>
              <h3 className="text-xl font-bebas mb-2">Need Ads That Actually Convert?</h3>
              <p className="text-muted-foreground font-roboto">
                Our ads are designed with psychology and data—not just pretty visuals
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-urgent rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-urgent-foreground" />
              </div>
              <h3 className="text-xl font-bebas mb-2">Want Video Ready in 24 Hours?</h3>
              <p className="text-muted-foreground font-roboto">
                From concept to final video in under 24 hours guaranteed
              </p>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 card-shadow max-w-2xl mx-auto">
            <h3 className="text-2xl font-bebas mb-4">Ready to See What We Can Do?</h3>
            <p className="text-muted-foreground mb-6 font-roboto">
              Get a custom sample video for just $97 (applied to your full order)
            </p>
            <WhatsAppButton 
              message={primaryMessage}
              variant="urgent"
              className="w-full"
            >
              Get My $97 Sample Video Now
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* As Seen On */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground mb-8 font-roboto">As Featured In</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="bg-muted rounded-lg px-8 py-4 text-muted-foreground font-bebas text-lg">
              TECH CRUNCH
            </div>
            <div className="bg-muted rounded-lg px-8 py-4 text-muted-foreground font-bebas text-lg">
              FORBES
            </div>
            <div className="bg-muted rounded-lg px-8 py-4 text-muted-foreground font-bebas text-lg">
              ENTREPRENEUR
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;