export default function BlogCard({ image, title, date, description }) {
  return (
    <div className="card h-100">
      <img src={image} className="card-img-top" alt={title} style={{ height: "200px", objectFit: "cover" }} />
      <div className="card-body">
        <p className="text-muted" style={{ fontSize: "12px" }}>{date}</p>
        <h5 className="card-title">{title}</h5>
        <p className="card-text" style={{ fontSize: "14px", color: "#555" }}>{description}</p>
        <button className="btn btn-success btn-sm">Read More</button>
      </div>
    </div>
  )
}