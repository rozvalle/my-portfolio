import { useState } from "react";
import { motion } from "framer-motion";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("sending");

        // Simulate async submit (replace with EmailJS / Formspree)
        await new Promise((res) => setTimeout(res, 1500));
        setStatus("sent");
    };

    return (
        <section id="contact" className="relative mx-auto max-w-6xl px-6 py-16">
            <div className="grid gap-12 md:grid-cols-2">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-semibold tracking-tight">
                        Let’s build something.
                    </h2>
                    <p className="mt-4 max-w-md text-neutral-400">
                        I’m a graduating IT student focused on building clean, modern web
                        applications. Feel free to reach out for opportunities,
                        collaborations, or questions.
                    </p>

                    {/* Availability Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="mt-8 rounded-2xl border border-neutral-800 p-6"
                    >
                        <p className="mb-4 font-medium">Currently available for:</p>
                        <ul className="space-y-2 text-neutral-400">
                            <li>• Junior Frontend / Entry-Level Roles</li>
                            <li>• Internship Opportunities</li>
                            <li>• Freelance (Small Projects)</li>
                        </ul>

                        {/* Socials */}
                        <div className="mt-6 flex gap-4">
                            <motion.a
                                href="https://github.com/rozvalle"
                                target="_blank"
                                rel="noopener noreferrer"
                                data-cursor="hover"
                                data-cursor-text="OPEN"
                                whileHover={{ y: -3 }}
                                className="text-sm text-neutral-400 hover:text-white transition"
                            >
                                <AiFillGithub className="inline mb-0.5 mr-1" size={28}/>
                            </motion.a>
                            <motion.a
                                href="https://linkedin.com/in/francis-elmo-valeros-b65782397"
                                target="_blank"
                                rel="noopener noreferrer"
                                data-cursor="hover"
                                data-cursor-text="OPEN"
                                whileHover={{ y: -3 }}
                                className="text-sm text-neutral-400 hover:text-white transition"
                            >
                                <AiFillLinkedin className="inline mb-0.5 mr-1" size={28}/>
                            </motion.a>
                            <motion.a
                                href="mailto:elmovaleros11@gmail.com"
                                data-cursor="hover"
                                data-cursor-text="EMAIL"
                                whileHover={{ y: -3 }}
                                className="text-sm text-neutral-400 hover:text-white transition"
                            >
                                <AiFillMail className="inline mb-0.5 mr-1" size={28} />
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Form */}
                <motion.form
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0.25 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >
                    <div>
                        <label className="mb-2 block text-sm text-neutral-400">Name</label>
                        <input
                            required
                            type="text"
                            className="w-full rounded-xl border border-neutral-800 bg-transparent px-4 py-3 outline-none transition focus:border-white"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm text-neutral-400">Email</label>
                        <input
                            required
                            type="email"
                            className="w-full rounded-xl border border-neutral-800 bg-transparent px-4 py-3 outline-none transition focus:border-white"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm text-neutral-400">Message</label>
                        <textarea
                            required
                            rows={5}
                            className="w-full resize-none rounded-xl border border-neutral-800 bg-transparent px-4 py-3 outline-none transition focus:border-white"
                        />
                    </div>

                    <button
                        data-cursor="button"
                        data-cursor-text="SEND"
                        disabled={status === "sending" || status === "sent"}
                        className="flex items-center justify-center rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:opacity-90 disabled:opacity-50"
                    >
                        {status === "idle" && "Send Message"}
                        {status === "sending" && "Sending…"}
                        {status === "sent" && "✓ Sent"}
                    </button>

                    <p className="text-sm text-neutral-500">
                        I usually reply within 24–48 hours.
                    </p>
                </motion.form>
            </div>
        </section>
    );
}

/**
 * Notes:
 * - Replace handleSubmit with EmailJS / Formspree / API route
 * - Cursor integrates automatically via data-cursor attributes
 * - Mobile-friendly single column layout
 */
