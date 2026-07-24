"use client"

import { RichCard } from "@/components/rich-card"

const media =
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80&auto=format&fit=crop"
const landscape =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80&auto=format&fit=crop"
const coffee =
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80&auto=format&fit=crop"

export function CardMediaBottomExample() {
  return (
    <RichCard
      appearance="media-bottom"
      title="Fluid Gradient Flow"
      description="A vibrant and abstract background with smooth gradient curves."
      imageSrc={media}
    />
  )
}

export function CardMediaTopExample() {
  return (
    <RichCard
      appearance="media-top"
      title="Ethereal Swirl Gradient"
      description="Smooth, flowing gradients blending rich tones in an abstract swirl."
      imageSrc={media}
    />
  )
}

export function CardHorizontalExample() {
  return (
    <RichCard
      appearance="horizontal"
      title="Dreamy Colorwave Gradient"
      description="A smooth blend of vibrant tones for a magical touch."
      imageSrc={media}
    />
  )
}

export function CardSocialExample() {
  return (
    <RichCard
      appearance="social"
      imageSrc={media}
      author="Philip George"
      handle="@philip20"
    />
  )
}

export function CardTestimonialExample() {
  return (
    <RichCard
      appearance="testimonial"
      description="Incredible time-saver! The pre-built components are not only visually appealing but also highly customizable, fitting seamlessly into my projects. With a wide array of options to choose from, I can easily match."
      highlight="visually appealing but also highly customizable"
      author="Sam Green"
      handle="@SamG11"
      avatarSrc="https://github.com/shadcn.png"
      rating={4}
    />
  )
}

export function CardPromoExample() {
  return (
    <div className="flex w-full flex-wrap items-start justify-center gap-6">
      <RichCard
        appearance="promo"
        align="start"
        description="Simplifying your workflow from day one. Manage your tasks, projects, and team in one place."
        imageSrc={coffee}
        primaryAction="Get Started"
      />
      <RichCard
        appearance="promo"
        align="center"
        description="Making your design process faster and easier. Design tools for your team."
        imageSrc={landscape}
        primaryAction="Get Started"
      />
    </div>
  )
}

export function CardOverlayExample() {
  return (
    <RichCard
      appearance="overlay"
      title="Image Scale Effect"
      description="This card features a smooth image scaling effect and background overlay on hover."
      imageSrc={landscape}
    />
  )
}

export function CardOverlayAuthorExample() {
  return (
    <RichCard
      appearance="overlay-author"
      title="Author Profile"
      description="Profile card showcasing the author's avatar, name, and estimated reading time for each post."
      imageSrc={landscape}
      author="Nick Johnson"
      handle="nick@example.com"
      avatarSrc="https://github.com/shadcn.png"
    />
  )
}

export function CardBillingExample() {
  return <RichCard appearance="billing" />
}

export function CardStatusExample() {
  return (
    <RichCard
      appearance="status"
      title="Deployment Successful"
      description="Your app is now live"
    />
  )
}

export function CardFeatureExample() {
  return (
    <RichCard
      appearance="feature"
      title="Recent Orders Overview"
      description="Track and review all recent purchases, updates, and status changes in one place."
      linkLabel="View Orders"
    />
  )
}

export function CardDocsExample() {
  return (
    <RichCard
      appearance="docs"
      title="Documentation"
      description="Find guides, API references, and examples to integrate with our platform."
      linkLabel="View docs"
    />
  )
}
