import { Zap, Clock, Pencil, Star, Cog, Timer } from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: "Efficient",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      icon: Clock,
      title: "Streamlined Process",
      description: "Eget dolor morbi non arcu risus quis. Tincidunt dui ut ornare lectus sit amet est placerat. vestibulum lorem sed risus ultricies."
    },
    {
      icon: Pencil,
      title: "Minimum Effort",
      description: "Enim praesent elementum facilisis leo. Diam donec adipiscing tristique risus nec feugiat in fermentum. Non diam phasellus."
    },
    {
      icon: Star,
      title: "Accessible For All",
      description: "Vitae tempus quam pellentesque nec nam aliquam sem. Dignissim suspendisse in est ante in nibh mauris cursus. Donec ultrices tincidunt."
    },
    {
      icon: Cog,
      title: "Completely Functional",
      description: "Tortor id aliquet lectus proin nibh nisl condimentum. Vulputate mi sit amet mauris. Varius vel pharetra vel turpis nunc."
    },
    {
      icon: Timer,
      title: "Slow Updates",
      description: "Nibh praesent tristique magna sit. Fermentum posuere urna nec tincidunt praesent semper feugiat vulputate mi sit amet mauris."
    }
  ]

  return (
    <section className="py-16 px-4 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block bg-blue-50 text-blue-600 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            Our Main Features
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The world's first lazy efficient design system.
          </h2>
          <p className=" text-lg md:text-xl max-w-3xl mx-auto">
          The ShapeXUI tailored for entrepreneurs who prefer taking it easy. Say goodbye to lengthy design processes and hello to rapid development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 mb-6">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className=" leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

