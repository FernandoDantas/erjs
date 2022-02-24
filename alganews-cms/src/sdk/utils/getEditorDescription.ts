import { formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default function getEditorDescription(editorCriationDate: Date){
    const distance = formatDistance(editorCriationDate, new Date(), { locale: ptBR })

    return `Editor há ${distance}`
}