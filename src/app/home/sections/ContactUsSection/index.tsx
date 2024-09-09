"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";

const ContactUsSection = () => {
  const [initialValue, setInitialValue] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const onSendMessage = () => {
    const destinationNumber = 6281381195762;

    const waMessage = `Name : ${initialValue.fullName}\nPhone Number : ${initialValue.phoneNumber}\nEmail : ${initialValue.email}\n${initialValue.message}`;
    const encodedMessage = encodeURI(waMessage);

    window.open(
      `https://wa.me/${destinationNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <div
      id="contact-us-section"
      className="sm:max-w-8xl sm:px-6 lg:px-16 mx-auto"
    >
      <div className="relative w-full bg-[#293037] sm:rounded-[40px] lg:rounded-[60px] overflow-hidden py-10 px-6">
        <div className="relative z-[1] w-full">
          <h3 className="text-sm sm:text-base lg:text-lg text-[#B4B4B4] underline mb-4 lg:mb-6 lg:mx-0 text-center">
            CONTACT US
          </h3>
          <h3 className="text-xl sm:text-2xl lg:text-3xl text-white font-semibold mb-4 lg:mb-10 lg:mx-0 text-center">
            Feel Free to Contact Us
          </h3>

          <div className="flex flex-col gap-6 w-full max-w-[800px] mx-auto">
            <Input
              type="text"
              required
              placeholder="Full name"
              className="text-center"
              onChange={(e) =>
                setInitialValue((prev) => ({
                  ...prev,
                  fullName: e.target.value,
                }))
              }
            />

            <Input
              type="text"
              required
              placeholder="Phone"
              className="text-center"
              onChange={(e) =>
                setInitialValue((prev) => ({
                  ...prev,
                  phoneNumber: e.target.value,
                }))
              }
            />

            <Input
              type="text"
              required
              placeholder="Email"
              className="text-center"
              onChange={(e) =>
                setInitialValue((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
            />

            <Textarea
              required
              rows={4}
              placeholder="Message"
              className="text-center"
              onChange={(e) =>
                setInitialValue((prev) => ({
                  ...prev,
                  message: e.target.value,
                }))
              }
            />

            <div className="w-full sm:max-w-[350px] mx-auto">
              <Button
                variant="outline"
                type="submit"
                color="white"
                size="lg"
                className="w-full"
                onClick={onSendMessage}
              >
                SEND YOUR MESSAGE
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute z-[0] h-full w-full top-0 left-0">
          <div className="relative bg-[url('/static/home/contact-us-section/bg-contact-us.webp')] bg-cover bg-center mix-blend-normal opacity-30 w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
