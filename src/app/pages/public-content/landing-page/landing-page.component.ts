import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiImgPipe } from '../../../core/pipes/api-img.pipe';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, RouterLink, ApiImgPipe],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  heroBgImage: string = '9c918d2b-f25b-480f-a05d-cc1a30cd2f53.jpg';
  promoImage: string = 'b62d4f04-6e32-4ea5-a576-d321ce09359f.jpg';

  featuredEvents = [
    { title: 'Conferencia sobre innovación universitaria', description: 'Un evento que explora nuevas tendencias y prácticas en la educación superior.', image: '3da8fdf4-c0fd-49b3-8de9-8fe555c50afc.jpg' },
    { title: 'Taller Interactivo sobre Desarrollo de Habilidades', description: 'Una sesión práctica diseñada para ayudar a los participantes a adquirir y mejorar habilidades específicas.', image: 'ddb5b132-b756-43f2-a011-d80b841b6238.jpg' },
    { title: 'Seminario de Tecnología Educativa', description: 'Un seminario enfocado en las últimas herramientas y tecnologías que están transformando el ámbito educativo.', image: 'f9568795-ca26-4af3-823f-754c42c35104.jpg' },
    { title: 'Encuentro de Liderazgo Estudiantil', description: 'Un evento que reúne a estudiantes para discutir y desarrollar habilidades de liderazgo.', image: '81019c2a-9b70-4ad1-bdec-15c1adf4b1d2.jpg' },
  ];

  testimonials = [
    { name: 'Jaime, el estudiante curioso', quote: 'CampusSphere me permitió inscribirme en eventos que realmente me interesaban, desde talleres hasta seminarios especializados.', image: 'dd751f33-ab04-45b4-8200-d3c5108b6919.jpg' },
    { name: 'Angela, la entusiasta de la tecnología', quote: 'Gracias a CampusSphere, descubrí eventos sobre tecnología que no sabía que existían. ¡La inscripción fue rápida y sencilla!', image: '0cfc4921-b949-4450-9aab-54011ea1419b.jpg' },
    { name: 'Carlos, el aprendiz constante', quote: 'Inscribirme a conferencias de liderazgo nunca había sido tan fácil. CampusSphere me ayudó a encontrar eventos que encajan con mis objetivos profesionales.', image: '501f3b43-b0fb-4877-8d2f-3c9b391b5172.jpg' },
  ];

  features = [
    { title: 'Búsqueda de Eventos', description: 'Encuentra eventos que te interesan con facilidad. Filtra por fecha, tema o ubicación.', icon: 'f09e4375-1e70-437d-8953-419e8cc94c16.png' },
    { title: 'Inscripción eficaz', description: 'Inscríbete en un evento en pocos pasos. Revisa los detalles y escoge de manera efectiva.', icon: 'cb614566-4d38-4195-963a-91c4d9c303b5.png ' },
    { title: 'Calendario Personalizado', description: 'Crea tu calendario personal de eventos. Recibe recordatorios y recomendaciones.', icon: '78137645-1b6b-41ca-9624-0b990df9c9ec.png' },
    { title: 'Notificaciones en Tiempo Real', description: 'Mantente al tanto de los eventos y las actualizaciones a través de notificaciones.', icon: 'b91fee32-e812-428b-b6c6-e1881fb83d9e.png' },
    { title: 'Información detallada', description: 'Conoce los detalles de cada evento, para tener una mejor experiencia y pasión.', icon: '241c62f1-b239-4c00-9424-9c381eecf60f.png' },
  ];
}
