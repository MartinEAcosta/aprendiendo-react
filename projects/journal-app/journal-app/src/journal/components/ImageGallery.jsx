import { ImageList , ImageListItem } from '@mui/material';

export const ImageGallery = ( { images = []} ) => {
  return (
    <ImageList sx={{ width: '100%', height: 450 }} cols={3} rowHeight={200}>
      {images.map((image) => (
        <ImageListItem key={image}>
          <img
            srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${image}?w=164&h=164&fit=crop&auto=format`}
            alt="Imagen de la nota."
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}