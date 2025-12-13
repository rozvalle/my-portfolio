export default function Contact() {
    return (
        <section className="p-12 bg-white">
            <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
            <form className="flex flex-col max-w-md">
                <input type="text" placeholder="Name" className="mb-4 p-2 border border-gray-300 rounded" />
                <input type="email" placeholder="Email" className="mb-4 p-2 border border-gray-300 rounded" />
                <textarea placeholder="Message" rows={4} className="mb-4 p-2 border border-gray-300 rounded"></textarea>
                <button type="submit" className="bg-gray-900 text-white p-2 rounded hover:bg-gray-700">Send Message</button>
            </form>
        </section>
    )
}
