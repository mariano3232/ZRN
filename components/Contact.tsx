"use client";

import emailjs from "@emailjs/browser";
import { FormEvent, useState } from "react";
import { useLocale } from "@/lib/i18n/locale-context";

const fieldIds = [
  { id: "nombre", type: "text", required: true },
  { id: "mail", type: "email", required: true },
  { id: "telefono", type: "tel", required: false },
  { id: "asunto", type: "text", required: false },
] as const;

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const { t } = useLocale();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setError(t.contact.configError);
      return;
    }

    setStatus("sending");
    setError("");

    try {
      await emailjs.sendForm(serviceId, templateId, form, { publicKey });
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
      setError(t.contact.sendError);
    }
  }

  return (
    <footer id="contacto" className="bg-navy text-placeholder">
      <div className="mx-auto max-w-[1440px] px-6 pt-16 pb-20 md:px-[78px] md:py-20">
        <h2 className="font-display my-16 text-center text-[32px] font-semibold tracking-[0.03em]">
        {t.contact.title}
        </h2>

        <form
          className="mx-auto grid max-w-[540px] grid-cols-1 gap-x-8 gap-y-[22px] sm:grid-cols-2"
          onSubmit={onSubmit}
        >
          {fieldIds.map((field) => {
            const label = t.contact.fields[field.id];
            return (
              <label key={field.id} className="block">
                <span className="sr-only">{label}</span>
                <input
                  id={field.id}
                  name={field.id}
                  type={field.type}
                  placeholder={label}
                  required={field.required}
                  className="h-[50px] w-full border border-placeholder bg-transparent px-5 text-base font-medium tracking-[0.03em] text-placeholder placeholder:text-placeholder focus:outline-none"
                />
              </label>
            );
          })}

          <label className="sm:col-span-2">
            <span className="sr-only">{t.contact.fields.mensaje}</span>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={5}
              placeholder={t.contact.fields.mensaje}
              required
              className="min-h-[119px] w-full resize-none border border-placeholder bg-transparent px-5 py-4 text-base font-medium tracking-[0.03em] text-placeholder placeholder:text-placeholder focus:outline-none"
            />
          </label>

          <div className="sm:col-span-2 flex items-center gap-4">
            <button
              type="submit"
              disabled={status === "sending"}
              className="font-display h-[45px] w-[108px] bg-btn text-base font-medium tracking-[0.03em] text-placeholder disabled:opacity-60"
            >
              {status === "sending" ? t.contact.sending : t.contact.send}
            </button>
            {status === "sent" ? (
              <p className="text-sm tracking-[0.03em] text-placeholder">{t.contact.sent}</p>
            ) : null}
            {status === "error" ? (
              <p className="text-sm tracking-[0.03em] text-accent">{error}</p>
            ) : null}
          </div>
        </form>

        <div className="mt-60 flex justify-between gap-10 sm:flex-row">
          <div>
            <img src="/logos/logo_footer.png" alt="ZRN Comex" className="w-[100px] sm:h-[78px] sm:w-[143px]" />
          </div>
          <address className="not-italic flex flex-col text-right text-sm font-normal tracking-[0.03em] text-white">
          </address>
        </div>
      </div>
    </footer>
  );
}
