from taipy import Gui

title ="""GoGeneric"""
path="logo.jpg"
medicine_name="Contact Us: 001234XXXXXX"
location_name="Address: Shaheed Sukhdev College of Business Studies"
about="Addressing the dearth of awareness regarding generic medicines and government health schemes in rural areas, our project introduces a user-centric website. This platform enables users to easily locate nearby generic medical stores, compare generic and non-generic medications for optimal choices, and fill out basic details for personalized government health scheme recommendations. By amalgamating these functionalities, our initiative seeks to empower individuals with information, foster informed healthcare decisions, and ensure accessibility to affordable healthcare options. In a concise manner, we aim to bridge the health information gap and enhance the well-being of individuals in underserved communities."

def harry():    print('Submitted')


page="""
<|text-center|
<|{path}|image|>

<|{title}|hover_text=Hey|>

<|{medicine_name}|>

<|{location_name}|>

<|{about}|>

>
"""



# this code will run only if this code is run in the same file, and not when it is imported in any other file
# if __name__=="__main__": 
app=Gui(page)
app.run(use_reloader=True)

