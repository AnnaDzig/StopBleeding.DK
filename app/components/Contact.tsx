export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg text-center">
      <h2 className="text-2xl font-bold">Kontakt os</h2>
      <form
        action="https://formspree.io/f/your-form-id"
        method="POST"
        className="mt-4 space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Navn"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Din besked"
          className="w-full p-2 border rounded"
          required></textarea>
        <button
          type="submit"
          className="bg-accent text-white px-4 py-2 rounded hover:bg-red-600">
          Send
        </button>
      </form>
    </section>
  );
}
