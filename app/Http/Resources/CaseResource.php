<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class CaseResource extends JsonResource
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
      'type' => $this->type,
      'color' => $this->color,
      's_panel' => $this->s_panel,
      'price' => $this->price,
      'image' => $this->image ? Storage::url($this->image) : '',
      'phone' => $this->phone
    ];
  }
}
