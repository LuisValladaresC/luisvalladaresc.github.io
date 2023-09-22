export const projectModalTemplate = (project) => {
  const template =
  `<div class="modal-container-header">
    <h3 class="modal-encabezado-titulo">${project.titulo}</h3>
    <button class="modal-encabezado-button" id="btn_cerrar_modal">×</button>
  </div>
  <div class="modal-container-body">
    <figure class="modal-body-imagen">
        <img
          src="${project.image.description.url2x || project.image.description.url}" 
          srcset="${project.image.description.url2x ? project.image.description.url + ', ' + project.image.description.url2x + ' 2x' : ''}"
          alt="Pagina Web"
        />
    </figure>
    <div class="modal-body-contenido">
        <h4 class="modal-contenido-titulo">Descripcion</h4>
        <p class="modal-contenido-parrafo">${project.description}</p>
        <h4 class="modal-contenido-titulo">URL</h4>
        <div class="modal-contenido-enlaces">
            <a class="modal-enlaces-url" href="${project.website}" target="_blank">${project.website}</a>
            ${project.github ? 
                `<a class="modal-enlaces-github" href="${project.github}" target="_blank"><i class="fab fa-github"></i></a>` 
            : ''}
        </div>
        <h4 class="modal-contenido-titulo">Requerimientos</h4>
        <div class="modal-contenido-requerimientos">
            ${String(project.tools.map(tool => 
                `<span class="${tool}">${tool}</span>`
            )).replace(/,/g, ' ')}
        </div>
    </div>
  </div>`
  return template;
}