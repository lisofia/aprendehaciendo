import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Component() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="bg-[#1d2875] text-white text-center px-4 py-20 rounded-b-[60%_40%_/_0_0_30px_30px]">
        <h1 className="text-4xl font-bold mb-4">Aprende Haciendo</h1>
        <p className="text-xl mb-8">Tu plataforma para aprender Arduino de manera práctica y divertida.</p>
        <div className="relative w-48 h-48 mx-auto mb-8">
          <Image
            src="/placeholder.svg"
            alt="Chippi mascot"
            width={192}
            height={192}
            className="object-contain"
            priority
          />
        </div>
     
      </header>

     

      {/* Recent Posts */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1d2875] mb-8">Publicaciones Recientes</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((post) => (
              <Card key={post} className="bg-[#1d2875] text-white p-6">
                <h3 className="text-xl font-bold mb-4">Proyecto Arduino #{post}</h3>
                <p className="mb-4">Aprende a crear un proyecto interesante con Arduino. Paso a paso con ejemplos prácticos.</p>
                <Button variant="outline" className="w-full text-[#8fffff] border-[#8fffff] hover:bg-[#8fffff] hover:text-[#1d2875]">
                  Leer más
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1d2875] text-white px-4 py-12">
        <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-3">
          <div>
            <h4 className="font-bold mb-4">Redes Sociales</h4>
            <a href="https://www.instagram.com/listechve/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#8fffff] hover:text-white">
              Instagram
            </a>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li>WhatsApp: +584123762688</li>
              <li>Lunes a Sábado de 9am a 12pm</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Ubicación</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.8071445415812!2d-70.25250432432777!3d8.614506195338079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e7b5779bbae928d%3A0x302c21ae075b2a53!2sC.C.%20Cima!5e0!3m2!1ses!2sde!4v1725672560591!5m2!1ses!2sde"
              className="w-full h-48 rounded-md"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </footer>
    </div>
  )
}