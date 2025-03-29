
export const fileUpload = async( file ) => {

    if( !file ) throw new Error('No se ha seleccionado ningun archivo a subir.');    

    const cloudURL = 'https://api.cloudinary.com/v1_1/dgr0ijxkm/upload';
    
    const formData = new FormData();

    formData.append('upload_preset', 'react-journal');
    formData.append('file' , file );

    try{

        const res = await fetch( cloudURL , {
            method: 'POST',
            body: formData,
        } );

        if( !res.ok ) throw new Error('No se pudo subir la imagen.');

        const cloudRes = await res.json();

        return cloudRes.secure_url;
    }
    catch(error){
        console.log(error);
        throw new Error( error.message );
    }

}