const Footer = () => {
  return (
    <section className="bg-primary text-white py-12 px-4">
      <div className="max-w-2xl sm:flex flex-row gap-8">
        <p>&copy; {new Date().getFullYear()} - K.Kapank Portfolio</p>
      </div>
    </section>
  )
}
export default Footer