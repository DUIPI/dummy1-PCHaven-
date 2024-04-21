<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class PsuResource extends JsonResource
{
  /**
   * Transform the resource into an array.
   *
   * @return array<string, mixed>
   */
  public function toArray(Request $request): array
  {
    return [
      'id' => $this->id,
      'user_id' => $this->user_id,
      'name' => $this->name,
      'buteemj' => $this->buteemj,
      'watt' => $this->watt,
      'modular' => $this->modular,
      'color' => $this->color,
      'price' => $this->price,
      'image' => $this->image ? Storage::url($this->image) : '',
      'phone' => $this->phone
    ];
  }
}
