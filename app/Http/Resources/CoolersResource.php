<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class CoolersResource extends JsonResource
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
      'fan_rpm' => $this->fan_rpm,
      'noice_lvl' => $this->noice_lvl,
      'color' => $this->color,
      'size' => $this->size,
      'price' => $this->price,
      'image' => $this->image ? Storage::url($this->image) : '',
    ];
  }
}
