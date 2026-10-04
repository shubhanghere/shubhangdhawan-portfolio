"use client";

import { useEffect, useState } from "react";
import {
  Phone,
  X,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { SiGmail, SiWhatsapp } from "react-icons/si";

type Channel = "email" | "whatsapp" | "call";

interface ConnectModalProps {
  open: boolean;
  onClose: () => void;
}

const EMAIL = "shubhangdhawan2000@gmail.com";
const PHONE = "+919335219193";

const DEFAULT_MESSAGE =
  "Hey Robot, I came across your portfolio and would love to connect.";

export default function ConnectModal({
  open,
  onClose,
}: ConnectModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [channel, setChannel] = useState<Channel | null>(null);
  const [message, setMessage] = useState(DEFAULT_MESSAGE);

  useEffect(() => {
    if (!open) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  if (!open) return null;

  const choose = (value: Channel) => {
    setChannel(value);
    setStep(2);
  };

  const reset = () => {
    setStep(1);
    setChannel(null);
  };

  const openChannel = () => {
    if (!channel) return;

    if (channel === "email") {
      window.location.href =
        `mailto:${EMAIL}` +
        `?subject=${encodeURIComponent("Portfolio - Let's Connect")}` +
        `&body=${encodeURIComponent(message)}`;

      return;
    }

    if (channel === "whatsapp") {
      window.open(
        `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`,
        "_blank",
        "noopener,noreferrer"
      );

      return;
    }

    window.location.href = `tel:${PHONE}`;
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="connect-title"
      >
        <div className="modal-glow" />

        <div className="modal-head">
          <div>
            <div className="section-title">CONNECTION HUB</div>

            <h3 id="connect-title">Let&apos;s connect</h3>

            <p>
              Choose your preferred way to reach me.
            </p>
          </div>

          <button
            className="modal-close"
            onClick={onClose}
            aria-label="Close connection dialog"
          >
            <X size={20} />
          </button>
        </div>

        <div className="steps">
          <span className={step === 1 ? "step active" : "step"}>
            <b>01</b>
            Choose
          </span>

          <span className={step === 2 ? "step active" : "step"}>
            <b>02</b>
            Confirm
          </span>
        </div>

        {step === 1 && (
          <div className="modal-options">
            <button onClick={() => choose("email")}>
              <div className="modal-option-icon">
                <SiGmail size={22} />
              </div>

              <div>
                <strong>Email</strong>
                <span>Start a conversation</span>
              </div>

              <ArrowRight size={18} />
            </button>

            <button onClick={() => choose("whatsapp")}>
              <div className="modal-option-icon">
                <SiWhatsapp size={22} />
              </div>

              <div>
                <strong>WhatsApp</strong>
                <span>Send a quick message</span>
              </div>

              <ArrowRight size={18} />
            </button>

            <button onClick={() => choose("call")}>
              <div className="modal-option-icon">
                <Phone size={22} />
              </div>

              <div>
                <strong>Call</strong>
                <span>Connect directly</span>
              </div>

              <ArrowRight size={18} />
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="modal-step-two">
            {channel === "call" ? (
              <div className="preview-box">
                <div className="preview-icon">
                  <Phone size={22} />
                </div>

                <strong>Call Shubhang</strong>

                <p>
                  This opens the phone app with Shubhang&apos;s number ready. On
                  desktop, choose a calling app if your browser asks.
                </p>
              </div>
            ) : (
              <div className="message-editor">
                <label htmlFor="connect-message">
                  MESSAGE
                </label>

                <textarea
                  id="connect-message"
                  value={message}
                  onChange={(event) =>
                    setMessage(event.target.value)
                  }
                />
              </div>
            )}

            <div className="modal-actions">
              <button
                className="secondary-btn"
                onClick={reset}
              >
                <ArrowLeft size={15} />
                Back
              </button>

              <button
                className="primary-btn"
                onClick={openChannel}
              >
                {channel === "email" && (
                  <>
                    <SiGmail size={15} />
                    Open Email
                  </>
                )}

                {channel === "whatsapp" && (
                  <>
                    <SiWhatsapp size={15} />
                    Open WhatsApp
                  </>
                )}

                {channel === "call" && (
                  <>
                    <Phone size={15} />
                    Call
                  </>
                )}
              </button>
            </div>

            <div className="helper">
              On mobile, WhatsApp, email and calling will use the
              corresponding device app when available.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
