import { Component, OnInit, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'vinculacion_angular';
  isDropdownVisible = false; // Variable para controlar la visibilidad del menú desplegable de estadísticas

  isSidebarActive = false;
  selectedTestimonial: any = null;
  pages = [
    { name: "inicio", id: "inicio" },
    { name: "comunidad", id: "comunidad" },
    { name: "estadistica", id: "estadistica" },
    { name: "estadistica-u", id: "estadistica-u" },
    { name: "contacto", id: "contacto" },
    { name: "nosotros", id: "nosotros" }
  ];
  activePageId = "inicio";
  currentPage = "inicio";
  formInputs: HTMLInputElement[];

  constructor(private elementRef: ElementRef) {
    this.formInputs = [];
  }

  ngOnInit(): void {
    this.formInputs = Array.from(document.querySelectorAll('input'));
  }

  toggleSidebar(): void {
    this.isSidebarActive = !this.isSidebarActive;
  }

  selectTestimonial(testimonial: any): void {
    this.selectedTestimonial = testimonial;
  }

  closeModal(): void {
    this.selectedTestimonial = null;
  }

  // Navegación
  selectPage(page: any): void {
    this.activePageId = page.id;
    this.currentPage = page.id;
    window.scrollTo(0, 0);
  }

  @HostListener('document:click', ['$event'])
  handleClick(event: Event): void {
    // Verifica si el mouse está dentro del menú desplegable o el botón antes de ocultarlo
    const isMouseInside = this.elementRef.nativeElement.contains(event.target as Node);
    if (!isMouseInside) {
      this.isDropdownVisible = false;
    }
  }
  handleDropdownOptionClick(): void {
    // Oculta el menú desplegable
    this.isDropdownVisible = false;
  }

  toggleDropdown(): void {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  hideDropdown(): void {
    this.isDropdownVisible = false;
  }
}
