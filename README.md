# Scheduling System - Nexforce FullStack Case Study
A scheduling system built with Frappe Framework for appointment management and calendar integration.

## Overview
This system was developed as part of the NX FullStack Software Engineer case study for Nexforce, implementing an appointment scheduling solution using the Frappe Framework.

## About Nexforce
Nexforce is a global RevOps As a Service company providing HubSpot CRM platform expertise through a subscription model. We serve as trusted consultants for SMBs across 13+ countries, helping clients like Intuit QuickBooks, ReclameAQUI, and others achieve scalable growth through our innovative methodology.

## Project Context
The scheduling system integrates with a modernized Frappe-based CRM to:

- Manage appointments (create, update, cancel)
- Validate scheduling conflicts
- Send email notifications
- Provide calendar visualization

## Features
### Appointment Management

- Create/Update/Cancel appointments
- Automatic end date calculation
- Status tracking (Scheduled/Finished/Canceled)
### Conflict Prevention

- Validates seller availability
- Prevents double-booking
- Real-time validation
### Notifications

- Automated email notifications
- Status change alerts
- Seller notifications
### Calendar View

- Visual schedule overview
- Color-coded status indicators
- Filtered views

## Technical Implementation
The core functionality is implemented in appointment.py with key features:

```python
class Appointment(Document):
    # Appointment validation and management
    def validate_seller_availability()
    def set_end_date()
    def send_email_notification()
```

## Key Components
- **Datetime Management**: Automatic end date calculation based on start time and duration
- **Conflict Detection**: SQL queries to check overlapping appointments
- **Email Integration**: Template-based notifications system
- **Calendar** API: Event color coding and filtering
  
## Installation
1. Install bench CLI:
  ```
  pip install frappe-bench
  ```
2. Create new bench:
```
bench init scheduling-system
cd scheduling-system
```
3. Install dependencies:
```
bench get-app scheduling_system
bench install-app scheduling_system
```
## Development Setup
1. Enable developer mode:
```
bench set-config -g developer_mode 1
bench clear-cache
```

2. Start development server:
```
bench start
```


## Testing
The system includes validation testing for:

- Appointment scheduling conflicts
- Date calculations
- Email notifications
- Calendar view integration

## License
This project is licensed under MIT License - see the LICENSE file for details.
