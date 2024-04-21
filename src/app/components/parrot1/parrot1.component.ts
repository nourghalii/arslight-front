import { Component } from '@angular/core';

@Component({
  selector: 'app-parrot1',
  templateUrl: './parrot1.component.html',
  styleUrls: ['./parrot1.component.css']
})
export class Parrot1Component {
  feedbackMessage: string = '';
  showResponseMessage: boolean = false;
  placedImages: string[] = [];

  onDragStart(event: DragEvent, imageId: string) {
    const dataTransfer = event.dataTransfer;
    if (dataTransfer) {
      dataTransfer.setData('imageId', imageId);
    }
  }

  onDrop(event: DragEvent, expectedImageId: string) {
    event.preventDefault();
    const dataTransfer = event.dataTransfer;
    if (dataTransfer) {
      const droppedImageId = dataTransfer.getData('imageId');
      const dropZone = event.target as HTMLElement;
      if (droppedImageId && !this.placedImages.includes(droppedImageId)) {
        const droppedImage = document.querySelector(`[data-image-id='${droppedImageId}']`) as HTMLElement;
        if (droppedImage) {
          droppedImage.classList.add('dragged-image'); // Ajoutez la classe CSS pour positionner l'image
          dropZone.appendChild(droppedImage);
          this.placedImages.push(droppedImageId);
          if (this.placedImages.length === 4) {
            const expectedImages = ['image1', 'image2', 'image3', 'image4'];
            if (this.placedImages.every((imageId, index) => imageId === expectedImages[index])) {
              this.feedbackMessage = 'Correct answer!';
            } else {
              this.feedbackMessage = 'Oops! Try again.';
            }
            this.showResponseMessage = true;
            // Rediriger vers l'interface suivante après un délai
            setTimeout(() => {
              // Code pour rediriger
            }, 2000); // 2 secondes de délai avant la redirection
          }
        }
      }
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }
}
