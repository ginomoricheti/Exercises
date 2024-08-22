// src/App.tsx
import { arrayMove, rectSortingStrategy, SortableContext, sortableKeyboardCoordinates } from '@dnd-kit/sortable'
import './styles/App.css'
import { closestCenter, DndContext, DragEndEvent, DragOverlay, DragStartEvent, KeyboardSensor, PointerSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core'
import { useState } from 'react'
import { ImageGallery } from './types/global.types'
import { initialImageData } from './utils/data'
import ImageCard from './components/Cards/ImageCard'
import AddImageCard from './components/Cards/AddImageCard'
import ImageOverlay from './components/Cards/ImageOverlay'
import HeaderBlock from './components/Header/HeaderBlock'

function App() {
  const [galleryData, setGalleryData] = useState(initialImageData);

  const handleSelectImage = (id: string | number) => {
    // if galleryData.isSelected === true then set to false and vice versa
    const newGalleryData = galleryData.map((imageItem) => {
      if (imageItem.id === id) {
        return {
          ...imageItem,
          isSelected: !imageItem.isSelected,
        };
      }

      return imageItem;
    });

    setGalleryData(newGalleryData);
  };

  const handleOnDelete = (selectedItems: ImageGallery[]) => {
    // if galleryData.isSelected === true then filter out the selected items and return the rest
    const newGalleryData = galleryData.filter(
      (imageItem) => !selectedItems.includes(imageItem)
    );

    setGalleryData(newGalleryData);
  };

  // DND CODE STARTS HERE
  const [activeItem, setActiveItem] = useState<ImageGallery | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
    useSensor(TouchSensor)
  );

  const handleDragStart = (event: DragStartEvent) => {
    const { id } = event.active;

    if (!id) return;

    const currentItem = galleryData.find((item) => item.id === id);

    setActiveItem(currentItem || null);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveItem(null);
    const { active, over } = event;

    if (!over) {
      return;
    }

    if (active.id !== over.id) {
      setGalleryData((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };
  // DND CODE ENDS HERE

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="container flex flex-col items-center">
        <div className="bg-white my-8 rounded-lg shadow-lg max-w-5xl w-full">
          <HeaderBlock onDelete={handleOnDelete} galleryData={galleryData}/>
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-6">
              <SortableContext
                items={galleryData}
                strategy={rectSortingStrategy}
              >
                {galleryData.map((imageItem) => {
                  return (
                    <ImageCard
                      key={imageItem.id}
                      id={imageItem.id}
                      isSelected={imageItem.isSelected}
                      slug={imageItem.slug}
                      onClick={handleSelectImage}
                    />
                  );
                })}
              </SortableContext>

              <AddImageCard setGalleryData={setGalleryData} />

              <DragOverlay adjustScale={true} wrapperElement='div'>
                {
                  activeItem ? (<ImageOverlay className="absolute z-50 h-full w-full" slug={activeItem.slug} />) : null
                }
              </DragOverlay>

            </div>
          </DndContext>
        </div>
      </div>
    </div>
  );

}

export default App;