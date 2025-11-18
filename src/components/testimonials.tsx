import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function Testimonials() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl text-foreground mb-4">
                        What Our Guests Say
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                        Hear from families who have experienced the warmth and comfort of Alora Home Stay in Guwahati, Assam
                    </p>
                </div>

                <div className="grid gap-4 [--color-card:var(--color-muted)] *:border-none *:shadow-none sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2 dark:[--color-muted:var(--color-zinc-900)]">
                    <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2">
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="text-xl font-medium">Our family had an amazing stay at Alora Home Stay! The spacious rooms, fully furnished setup, and peaceful location made our visit to Guwahati truly memorable. The 24/7 water supply and high-speed internet were great conveniences. The owners are very welcoming and the residential area is safe and quiet. We felt right at home and would definitely recommend this place to anyone visiting Assam.</p>

                                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage
                                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Priyanka"
                                            alt="Priyanka Das"
                                            height="400"
                                            width="400"
                                            loading="lazy"
                                        />
                                        <AvatarFallback>PD</AvatarFallback>
                                    </Avatar>

                                    <div>
                                        <cite className="text-sm font-medium">Priyanka Das</cite>
                                        <span className="text-muted-foreground block text-sm">From Silchar, Assam</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card className="md:col-span-2">
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="text-xl font-medium">Perfect homestay for families! Peaceful location, clean rooms, and excellent kitchen facilities. The family-friendly environment made our kids feel comfortable. Highly recommended!</p>

                                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage
                                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh"
                                            alt="Rajesh Bora"
                                            height="400"
                                            width="400"
                                            loading="lazy"
                                        />
                                        <AvatarFallback>RB</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-sm font-medium">Rajesh Bora</cite>
                                        <span className="text-muted-foreground block text-sm">From Dibrugarh, Assam</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p>Exceeded our expectations! Spacious accommodation, modern amenities, and warm hospitality. The safe residential area gave us peace of mind while traveling with family.</p>

                                <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                                    <Avatar className="size-12">
                                        <AvatarImage
                                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Manisha"
                                            alt="Manisha Sharma"
                                            height="400"
                                            width="400"
                                            loading="lazy"
                                        />
                                        <AvatarFallback>MS</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-sm font-medium">Manisha Sharma</cite>
                                        <span className="text-muted-foreground block text-sm">From Jorhat, Assam</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p>Wonderful experience! Beautifully furnished, peaceful location, and incredibly helpful owners. High-speed internet and 24/7 water supply were perfect for my needs. Will definitely stay again!</p>

                                <div className="grid grid-cols-[auto_1fr] gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage
                                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Amit"
                                            alt="Amit Baruah"
                                            height="400"
                                            width="400"
                                            loading="lazy"
                                        />
                                        <AvatarFallback>AB</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-sm font-medium">Amit Baruah</cite>
                                        <span className="text-muted-foreground block text-sm">From Tezpur, Assam</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
