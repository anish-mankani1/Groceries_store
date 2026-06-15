import React from 'react'

import Blogcard from './Blogcard'

const blogs = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400",
    title: "How to Store Vegetables Fresh for Longer",
    date: "June 1, 2025",
    description: "Learn simple tips to keep your vegetables fresh for days without losing nutrients or taste."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1506484381205-f7945653044d?w=400",
    title: "Weekly Grocery Planning Guide",
    date: "May 25, 2025",
    description: "Plan your weekly groceries smartly, save money and reduce food waste with these easy steps."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=400",
    title: "Top 5 Seasonal Fruits This Summer",
    date: "May 18, 2025",
    description: "Discover the best fruits to eat this summer season — fresh, healthy and available at FreshMart."
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400",
    title: "Budget Grocery Shopping Tips",
    date: "May 10, 2025",
    description: "Get the most out of your grocery budget with these practical money-saving shopping tips."
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1607305387299-a3d9611cd469?w=400",
    title: "Benefits of Buying Local & Fresh",
    date: "May 2, 2025",
    description: "Why buying local produce is better for your health, your wallet, and the environment."
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400",
    title: "Kitchen Essentials Every Home Needs",
    date: "April 25, 2025",
    description: "A complete checklist of grocery staples and kitchen essentials every household should always have."
  },
]

export default function Blog() {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "2rem 1rem" }}>
      
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1 style={{ color: "#27500A" }}>Our Blog</h1>
        <p style={{ color: "#666" }}>Tips, recipes, and grocery guides for everyday living</p>
      </div>

      {/* Cards Grid */}
      <div className="row g-4">
        {blogs.map((blog) => (
          <div className="col-md-4" key={blog.id}>
            <Blogcard
              image={blog.image}
              title={blog.title}
              date={blog.date}
              description={blog.description}
            />
          </div>
        ))}
      </div>

    </div>
  )
}
