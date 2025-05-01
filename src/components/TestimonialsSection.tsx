
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    content: "HarvestConnect has transformed our retail business. We now get fresher produce at better prices, and our customers can really tell the difference.",
    author: {
      name: "Emily Johnson",
      role: "Owner, FreshMart Grocery",
      image: "https://i.pravatar.cc/150?img=32"
    }
  },
  {
    id: 2,
    content: "As a small-scale farmer, I struggled to find consistent buyers. With HarvestConnect, I now have reliable retail partners and better profits.",
    author: {
      name: "Michael Rivera",
      role: "Owner, Rivera Family Farms",
      image: "https://i.pravatar.cc/150?img=58"
    }
  },
  {
    id: 3,
    content: "The quality and freshness of produce from HarvestConnect is unmatched. Our restaurant customers have noticed the improvement in our dishes.",
    author: {
      name: "Sarah Chen",
      role: "Manager, Green Plate Restaurant",
      image: "https://i.pravatar.cc/150?img=47"
    }
  }
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-harvest-green-light/10">
      <div className="harvest-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-harvest-green mb-3">What Our Users Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join hundreds of satisfied farmers and retailers who are already benefiting from our platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500 inline-block" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src={testimonial.author.image} alt={testimonial.author.name} />
                  <AvatarFallback>{testimonial.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-medium text-gray-900">{testimonial.author.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.author.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
