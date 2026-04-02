from sqlalchemy import Column, Integer, String, Text
from database import Base
from sqlalchemy import DateTime
from sqlalchemy.sql import func

class Project(Base):
    __tablename__ = "projects"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    location = Column(String, index=True)
    description = Column(Text)
    status = Column(String)
    image_url = Column(String)


class Contact(Base):
    __tablename__ = "contacts"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    phone = Column(String)
    email = Column(String)
    company = Column(String, nullable=True)
    message = Column(String)
    created_at = Column(DateTime(timezone=True), server_default=func.now())