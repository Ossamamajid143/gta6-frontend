// import React from 'react';
// import HeroSection from '@/components/sections/HeroSection';
// import PricingSection from '@/components/sections/PricingSection';
// import CountdownSection from '@/components/sections/CountdownSection';
// import CryptoSection from '@/components/sections/CryptoSection';
// import NFTSection from '@/components/sections/NFTSection';
// import MerchSection from '@/components/sections/MerchSection';
// import Footer from '@/components/common/Footer';
// import Container from '@/components/ui/Container';
// import { fetchLatestPreorder } from '@/actions/preorder';

// export default async function Home() {
//   const preorder = await fetchLatestPreorder();

//   return (
//     <div className="min-h-screen bg-black text-white">
//       {/* Full-width hero section */}
//       <HeroSection />

//       {/* Contained sections */}
//       <Container maxWidth="full" padding="none" className="relative z-10">
//         <PricingSection />
//         <CountdownSection preorder={preorder} />
//         <CryptoSection />
//         <NFTSection />
//         <MerchSection />
//       </Container>
//       <Footer />
//     </div>
//   );
// }

'use client';
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/card";
export default function ParodySite() {
    const [daysCounter, setDaysCounter] = useState(0);
    useEffect(() => {
        const startDate = new Date("2020-09-17"); // Example start date
        const today = new Date();
        const diffTime = Math.abs(today.getTime() - startDate.getTime());
        setDaysCounter(Math.floor(diffTime / (1000 * 60 * 60 * 24)));
    }, []);
    return (
        <div className="bg-black text-white font-inter">
            {/* Top Bar */}
            <div className="sticky top-0 bg-[#0A0A0A] text-[#CCCCCC] text-sm p-2 text-center">
                Unofficial parody/commentary site. Not affiliated with Rockstar Games or Take-Two Interactive.
            </div>
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-black to-[#111111] text-center py-20 px-6">
                <h1 className="font-orbitron text-[56px] text-[#A259FF] drop-shadow-[0_0_10px_rgba(162,89,255,0.6)]">
                    GTA6Preorder.com — Not What You Think
                </h1>
                <p className="mt-4 text-xl text-white">
                    Millions search “GTA 6 preorder.” This site is parody & commentary only. We don’t sell preorders. Visit the official page at <a href="https://rockstargames.com/VI" className="text-[#3F8CFF] underline">rockstargames.com/VI</a>.
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
                    <Button className="bg-[#3F8CFF] hover:brightness-125 shadow-lg" asChild>
                        <a href="https://rockstargames.com/VI">Visit Official GTA VI Page →</a>
                    </Button>
                    <Button className="bg-[#33FF99] hover:brightness-125 shadow-lg" onClick={() => document.getElementById("purpose")?.scrollIntoView({ behavior: "smooth" })}>
                        Why This Exists
                    </Button>
                </div>
                <div className="mt-8 inline-block bg-black border border-[#3F8CFF] rounded-xl px-6 py-4">
                    <span className="font-mono text-lg">Days fans have been searching: {daysCounter}</span>
                </div>
            </section>
            {/* Transparency / Evidence Section */}
            <section className="bg-black py-16 px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="bg-[#111111] border border-[#3F8CFF]">
                        <CardContent className="p-6">
                            <h3 className="text-white font-semibold text-lg">USPTO Filing</h3>
                            <p className="text-sm mt-2">GTA6 Trademark ITU – Serial No. 99041018 Filed: February 13, 2025</p>
                            <a href="/pdfs/uspto_filing_receipt_redacted.pdf" download="GTA6-Filing-Receipt.pdf" className="text-[#3F8CFF] underline hover:brightness-125">
                                Download Filing Receipt (PDF)
                            </a>
                        </CardContent>
                    </Card>
                    <Card className="bg-[#111111] border border-[#3F8CFF]">
                        <CardContent className="p-6">
                            <h3 className="text-white font-semibold text-lg">USPTO Office Action</h3>
                            <p className="text-sm mt-2">July 22, 2025 – Non-Final Office Action citing 2(d) confusion with GRAND THEFT AUTO.</p>
                            <a href="/pdfs/uspto_office_action_redacted.pdf" download="GTA6-Office-Action.pdf" className="text-[#3F8CFF] underline hover:brightness-125">
                                Download Office Action (PDF)
                            </a>
                        </CardContent>
                    </Card>
                    <Card className="bg-[#111111] border border-[#3F8CFF]">
                        <CardContent className="p-6">
                            <h3 className="text-white font-semibold text-lg">Take-Two Counsel Letter</h3>
                            <p className="text-sm mt-2">May 30, 2025 – Kelley Drye letter on behalf of Take-Two Interactive.</p>
                            <a href="/pdfs/taketwo_letter_redacted.pdf" download="Take-Two-Counsel-Letter.pdf" className="text-[#3F8CFF] underline hover:brightness-125">
                                Download Letter (PDF)
                            </a>
                        </CardContent>
                    </Card>
                </div>
            </section>
            {/* Why This Site Exists */}
            <section id="purpose" className="bg-black py-12 px-8">
                <h2 className="font-orbitron text-3xl text-[#A259FF] drop-shadow-[0_0_8px_rgba(162,89,255,0.7)] mb-4">Why This Site Exists</h2>
                <p className="text-[#EAEAEA] text-base">
                    This is a parody & commentary project documenting preorder culture and hype cycles.
                    We don’t sell preorders. We link fans directly to the official Rockstar site.
                    All content is labeled “Not Affiliated.” The purpose is transparency, fan commentary, and cultural critique.
                </p>
            </section>
            {/* Press / Research Section */}
            <section className="bg-black py-16 px-8 text-center">
                <h2 className="font-orbitron text-3xl text-[#A259FF] drop-shadow-[0_0_8px_rgba(162,89,255,0.7)] mb-4">For Press & Researchers</h2>
                <p className="text-[#EAEAEA] mb-4">
                    You may quote this page. Please cite linked documents. Contact us for background or questions.
                </p>
                <a href="/pdfs/cease_desist_reply_redacted.pdf" download="Media-Backgrounder.pdf">
                    <Button className="bg-[#3F8CFF] hover:brightness-125">Download Media Backgrounder (PDF)</Button>
                </a>
                <p className="mt-4">Contact: <span className="text-[#3F8CFF]">press@neonparodylabs.com</span></p>
            </section>
            {/* Contact for Resolution Section */}
            <section className="bg-black py-16 px-8 text-center">
                <h2 className="font-orbitron text-3xl text-[#A259FF] drop-shadow-[0_0_8px_rgba(162,89,255,0.7)] mb-4">Contact for Resolution</h2>
                <p className="text-[#EAEAEA] mb-4">
                    We invite Rockstar/Take-Two or their authorized counsel to discuss assignment or acquisition of this domain and the GTA6 application. A confidential resolution is the cleanest path forward before launch.
                </p>
                <p>Contact: <span className="text-[#3F8CFF]">licensing@neonparodylabs.com</span></p>
                <p className="italic text-sm text-[#00FF88]">Subject line: GTA VI – Domain Resolution</p>
            </section>
            {/* Parody Playground */}
            <section className="bg-black py-16 px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="bg-[#111111] border border-[#A259FF]">
                        <CardContent className="p-6 text-center">
                            <h3 className="text-white font-semibold text-lg">AI Leak Generator (Parody)</h3>
                            <p className="mt-2 text-sm">Generate fake GTA6 ‘leaks’ with a parody watermark.</p>
                            <Button className="mt-4 bg-[#A259FF] hover:brightness-125">Try Now →</Button>
                        </CardContent>
                    </Card>
                    <Card className="bg-[#111111] border border-[#33FF99]">
                        <CardContent className="p-6 text-center">
                            <h3 className="text-white font-semibold text-lg">Meme Polls (Parody)</h3>
                            <p className="mt-2 text-sm">Vote on fake preorder bonuses fans would love to see.</p>
                            <Button className="mt-4 bg-[#33FF99] hover:brightness-125">Vote Now →</Button>
                        </CardContent>
                    </Card>
                </div>
            </section>
            {/* Footer */}
            <footer className="bg-[#0A0A0A] py-8 text-center text-[#B3B3B3]">
                <p>
                    Disclaimer: This is an unofficial parody/commentary website. Not affiliated with Rockstar Games or Take-Two Interactive. References to GTA6/GTA VI/Grand Theft Auto VI are nominative only. For official info, visit <a href="https://rockstargames.com/VI" className="text-[#3F8CFF] hover:brightness-125">rockstargames.com/VI</a>.
                </p>
                <p className="mt-4">© 2025 Neon Parody Labs, LLC</p>
                <div className="flex justify-center gap-4 mt-2">
                    <a href="#" className="text-[#3F8CFF] hover:brightness-125">Parody Policy</a>
                    <a href="#" className="text-[#3F8CFF] hover:brightness-125">Terms</a>
                    <a href="#" className="text-[#3F8CFF] hover:brightness-125">Privacy</a>
                    <a href="#" className="text-[#3F8CFF] hover:brightness-125">Press Kit</a>
                </div>
            </footer>
        </div>
    );
}
