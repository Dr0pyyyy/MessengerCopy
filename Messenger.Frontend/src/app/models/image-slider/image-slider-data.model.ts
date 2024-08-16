import {ImageSliderContentDataModel} from "./image-slider-content-data.model";
import {ImageSliderIconDataModel} from "./image-slider-icon-data.model";

export class ImageSliderDataModel {
  id: number;
  iconData: ImageSliderIconDataModel;
  imagePath: string;
  content: ImageSliderContentDataModel;
}
