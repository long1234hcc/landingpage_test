from pydantic import BaseModel
from typing import Optional
from typing import Optional

class ProjectBase(BaseModel):
    name: str
    location: str
    description: str
    status: str
    image_url: Optional[str] = None

class ProjectCreate(ProjectBase):
    pass

class ProjectResponse(ProjectBase):
    id: int

    class Config:
        from_attributes = True


class ContactCreate(BaseModel):
    name: str
    phone: str
    email: str
    company: Optional[str] = None
    message: str