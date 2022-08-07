import { storage, ref, deleteObject } from "./firebase"

export default async function deleteImage(imgLocation: string) {
  const imageRef = ref(storage, imgLocation)
  await deleteObject(imageRef)
}
