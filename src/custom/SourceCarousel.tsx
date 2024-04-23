import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function SourceCarousel() {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem className="md:basis-1 lg:basis-1/2">1</CarouselItem>
        <CarouselItem className="md:basis-1 lg:basis-1/2">2</CarouselItem>
        <CarouselItem className="md:basis-1 lg:basis-1/2">3</CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default SourceCarousel;
