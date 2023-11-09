interface CountryGradientSettings {
  rotate: number;
  startColor: {
    offset: string;
    color: string;
  };
  endColor: {
    offset: string;
    color: string;
  };
}

interface MarkerStyle {
  color: string;
  img: string | null;
  width: number;
  height: number;
  radius: number;
}

interface MapConfig {
  maxZoom?: number;
  zoomedCountries?: string[] | null;
  selectedCountries?: string[];
  countryStrokeWidth?: string;
  countryFillColor: string | CountryGradientSettings;
  countryStrokeColor?: string;
  accentFillColor: string | CountryGradientSettings;
  accentStrokeColor?: string;
  width?: number;
  height?: number;
  markers?: any[]; // Потрібно визначити тип масиву для маркерів
  markerStyle?: MarkerStyle;
  on?: {
    countryClick?: Function;
    countryMouseEnter?: Function;
    countryMouseLeave?: Function;
    markerClick?: Function;
    markerMouseEnter?: Function;
    markerMouseLeave?: Function;
  };
  mapPath: string;
}

export default MapConfig;
