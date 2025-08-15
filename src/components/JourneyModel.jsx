import React from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

function JourneyModal({ isOpen, onClose }) {
    const journeys = [
        {
            year: "2022",
            title: "Completed 12th Grade (Computer Science)",
            description: [
                "Scored 73%, with 188 out of 200 in Computer Science.",
                "Learned C++, networking, assembly language (8085), microcontrollers, and basics of web development."
            ],
        },
        {
            year: "2022",
            title: "First Year B.Sc CS (Semester I)",
            description: [
                "Learned Digital Electronics and Python and other core subjects.",
                "Completed Mobile Repairing certification (Hardware + Software) with an A+ grade, driven by a passion for electronics.",
            ],
        },
        {
            year: "2023",
            title: "First Year B.Sc CS (Semester II)",
            description: [
                "Got Certificate of Merit for securing 1st rank in FY.",
                "Won the project presentation competition by showcasing a Hardware project (Chocolate Vending Machine)."
            ],
        },
        {
            year: "2023",
            title: "Second Year B.Sc CS (Semester III)",
            description: [
                "Explored core computer science subjects including Python, Operating Systems, and Database Management."
            ],
        },
        {
            year: "2024",
            title: "Second Year B.Sc CS (Semester IV)",
            description: [
                "Led a team to victory, winning first prize in a robotics competition.",
                "Worked as Head Incharge and organized a competition 'Guess the Output' in Python and C with 50+ participants."
            ],
        },
        {
            year: "2024",
            title: "Third Year B.Sc CS (Semester V)",
            description: [
                "Focused on Semester V project discussion and development.",
                "Dedicated efforts towards academics and studies."
            ],
        },
        {
            year: "2025",
            title: "Third Year B.Sc CS (Semester VI)",
            description: [
                "Focused on backend development and app development.",
                "Continued working on Semester VI project and deepened study efforts."
            ],
        },
        {
            year: "2025",
            title: "Third Year B.Sc CS (Semester VI)",
            description: [
                "Graduated in Computer Science with an A+ grade and a CGPA of 9.10.",
                "Worked as a Backend Intern at Lumaqi.",
                "Gained valuable industry experience and mentorship from senior developers."
            ],
        },
    ];

    const [currentIndex, setCurrentIndex] = React.useState(0);

    if (!isOpen) return null;

    const prevSlide = () => {
        if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
    };

    const nextSlide = () => {
        if (currentIndex < journeys.length - 1) setCurrentIndex((prev) => prev + 1);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* Background Blur */}
            <div
                className="absolute inset-0 backdrop-blur-md bg-black/10"
                onClick={onClose}
            ></div>

            {/* Modal */}
            <div className="relative z-10 max-w-lg w-[90%] bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6">
                {/* Close Button */}
                <button
                    className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-red-500"
                    onClick={onClose}
                >
                    <X size={24} />
                </button>

                {/* Navigation */}
                <div className="flex items-center justify-between">
                    {currentIndex > 0 ? (
                        <button
                            onClick={prevSlide}
                            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition"
                        >
                            <ChevronLeft />
                        </button>
                    ) : (
                        <div className="w-10" />
                    )}

                    <div className="flex-1 text-center px-4">
                        {/* Year */}
                        <p className=" font-semibold text-xl text-blue-500">
                            {journeys[currentIndex].year}
                        </p>
                        {/* Title */}
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-1">
                            {journeys[currentIndex].title}
                        </h3>
                        {/* Description */}
                        <ul className="mt-3 text-gray-800 dark:text-white list-disc text-left ml-4">
                            {journeys[currentIndex].description.map((point, idx) => (
                                <li key={idx}>{point}</li>
                            ))}
                        </ul>
                    </div>

                    {currentIndex < journeys.length - 1 ? (
                        <button
                            onClick={nextSlide}
                            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition"
                        >
                            <ChevronRight />
                        </button>
                    ) : (
                        <div className="w-10" />
                    )}
                </div>
            </div>
        </div>
    );
}

export default JourneyModal;
