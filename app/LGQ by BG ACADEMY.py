import random
from datetime import datetime
import csv

from kivy.app import App
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.gridlayout import GridLayout
from kivy.uix.label import Label
from kivy.uix.button import Button
from kivy.uix.spinner import Spinner
from kivy.uix.textinput import TextInput
from kivy.clock import Clock
from kivy.core.window import Window
from kivy.graphics import Color, Rectangle

Window.clearcolor = (0.1, 0.1, 0.15, 1)  # Dark background


# ---------------------------------------------------------
# SAMPLE QUESTION GENERATOR
# ---------------------------------------------------------

def generate_questions(total):
    questions = []
    for i in range(1, total + 1):
        questions.append({
            "question": f"Solve 200 * 500",
            "options": [
                f"{10000}",
                f"{100000}",
                f"{10}",
                f"{100}"
            ],
            "answer": f"{100000}"
        })
    return questions


QUESTION_BANK = {
    "BECE": generate_questions(100),
    "UTME": generate_questions(300)
}


# ---------------------------------------------------------
# MAIN TESTDRILLER STYLE ENGINE
# ---------------------------------------------------------
QUESTION_BANK = {

# =========================================================
# ======================= BECE =============================
# =========================================================

"BECE": {

"Mathematics": [

{
"question": "What is 36 ÷ 6?",
"options": ["5", "6", "7", "8"],
"answer": "6"
},

{
"question": "Find the LCM of 4 and 6.",
"options": ["8", "10", "12", "14"],
"answer": "12"
},

{
"question": "If x + 5 = 12, find x.",
"options": ["5", "6", "7", "8"],
"answer": "7"
},

{
"question": "Convert 0.25 to fraction.",
"options": ["1/2", "1/3", "1/4", "1/5"],
"answer": "1/4"
},

{
"question": "Area of rectangle = ?",
"options": ["L × B", "2L + 2B", "L²", "B²"],
"answer": "L × B"
},

] * 5,

"English": [

{
"question": "Choose the correct synonym of 'Rapid'.",
"options": ["Slow", "Fast", "Weak", "Cold"],
"answer": "Fast"
},

{
"question": "Identify the noun in the sentence: 'John plays football.'",
"options": ["plays", "football", "John", "the"],
"answer": "John"
},

{
"question": "Opposite of 'Brave' is?",
"options": ["Bold", "Strong", "Cowardly", "Happy"],
"answer": "Cowardly"
},

{
"question": "Choose correct tense: She ___ to school yesterday.",
"options": ["go", "goes", "went", "gone"],
"answer": "went"
},

{
"question": "A sentence that asks a question is called?",
"options": ["Declarative", "Interrogative", "Exclamatory", "Imperative"],
"answer": "Interrogative"
},

] * 5,

"Basic Science": [

{
"question": "The organ that pumps blood is?",
"options": ["Lungs", "Kidney", "Heart", "Brain"],
"answer": "Heart"
},

{
"question": "Water boils at what temperature?",
"options": ["50°C", "75°C", "100°C", "150°C"],
"answer": "100°C"
},

{
"question": "Photosynthesis occurs in?",
"options": ["Root", "Stem", "Leaf", "Flower"],
"answer": "Leaf"
},

{
"question": "The force that pulls objects to earth is?",
"options": ["Magnetism", "Friction", "Gravity", "Tension"],
"answer": "Gravity"
},

{
"question": "States of matter are?",
"options": ["2", "3", "4", "5"],
"answer": "3"
},

] * 5,

},

# =========================================================
# ======================= UTME =============================
# =========================================================

"UTME": {

"Mathematics": [

{
"question": "Differentiate x².",
"options": ["x", "2x", "x²", "2"],
"answer": "2x"
},

{
"question": "Solve: 2x = 10",
"options": ["2", "3", "4", "5"],
"answer": "5"
},

{
"question": "If sin 30° = ?",
"options": ["1", "1/2", "√3", "0"],
"answer": "1/2"
},

{
"question": "Value of π (approx)?",
"options": ["2.14", "3.14", "4.13", "3.41"],
"answer": "3.14"
},

{
"question": "Expand (a + b)²",
"options": ["a² + b²", "a² + 2ab + b²", "a² - b²", "2ab"],
"answer": "a² + 2ab + b²"
},

] * 12,

"English": [

{
"question": "Choose correct meaning of 'Meticulous'.",
"options": ["Careless", "Careful", "Lazy", "Weak"],
"answer": "Careful"
},

{
"question": "Identify the adjective.",
"options": ["Quickly", "Happiness", "Beautiful", "Run"],
"answer": "Beautiful"
},

{
"question": "Choose correct passive form: He wrote a letter.",
"options": [
"A letter was written by him",
"He was written a letter",
"A letter wrote him",
"He writes a letter"
],
"answer": "A letter was written by him"
},

{
"question": "Synonym of 'Abundant'?",
"options": ["Scarce", "Plenty", "Little", "Few"],
"answer": "Plenty"
},

{
"question": "Antonym of 'Hostile'?",
"options": ["Friendly", "Angry", "Cold", "Rude"],
"answer": "Friendly"
},

] * 12,

"Physics": [

{
"question": "SI unit of Force?",
"options": ["Joule", "Newton", "Watt", "Pascal"],
"answer": "Newton"
},

{
"question": "Speed = ?",
"options": ["Distance × Time", "Distance / Time", "Time / Distance", "Mass × Acceleration"],
"answer": "Distance / Time"
},

{
"question": "Acceleration due to gravity is?",
"options": ["9.8m/s²", "8.9m/s²", "10m/s", "5m/s²"],
"answer": "9.8m/s²"
},

{
"question": "Energy stored in battery is?",
"options": ["Mechanical", "Electrical", "Chemical", "Heat"],
"answer": "Chemical"
},

{
"question": "Lens used to correct myopia?",
"options": ["Convex", "Concave", "Plane", "None"],
"answer": "Concave"
},

] * 12,

"Biology": [

{
"question": "Basic unit of life?",
"options": ["Tissue", "Cell", "Organ", "System"],
"answer": "Cell"
},

{
"question": "Human blood group universal donor?",
"options": ["A", "B", "AB", "O"],
"answer": "O"
},

{
"question": "Photosynthesis produces?",
"options": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
"answer": "Oxygen"
},

{
"question": "DNA stands for?",
"options": [
"Deoxyribonucleic Acid",
"Ribonucleic Acid",
"Dynamic Acid",
"None"
],
"answer": "Deoxyribonucleic Acid"
},

{
"question": "Largest organ in human body?",
"options": ["Heart", "Skin", "Liver", "Brain"],
"answer": "Skin"
},

] * 12,

}
}

class TestDrillerUI(BoxLayout):

    def __init__(self, **kwargs):
        super().__init__(orientation='vertical', padding=10, spacing=8)

        self.questions = []
        self.current_index = 0
        self.user_answers = {}
        self.time_left = 0
        self.score = 0

        # ---------------- HEADER ----------------
        header = BoxLayout(size_hint_y=0.1)

        self.name_input = TextInput(
            hint_text="Candidate Name",
            multiline=False,
            size_hint_x=0.3
        )

        self.exam_selector = Spinner(
            text="Select Exam",
            values=["BECE", "UTME"],
            size_hint_x=0.2
        )

        self.timer_label = Label(
            text="Time: 00:00",
            size_hint_x=0.2,
            color=(1, 0, 0, 1)
        )

        self.start_btn = Button(
            text="Start Exam",
            size_hint_x=0.3
        )
        self.start_btn.bind(on_press=self.start_exam)

        header.add_widget(self.name_input)
        header.add_widget(self.exam_selector)
        header.add_widget(self.timer_label)
        header.add_widget(self.start_btn)

        self.add_widget(header)

        # ---------------- QUESTION AREA ----------------
        self.question_label = Label(
            text="Click Start Exam",
            halign="left",
            valign="top",
            color=(1, 1, 1, 1)
        )
        self.add_widget(self.question_label)

        # ---------------- OPTIONS ----------------
        self.option_buttons = []
        for letter in ["A", "B", "C", "D"]:
            btn = Button(
                text=f"{letter}. Option",
                background_color=(0.2, 0.2, 0.3, 1)
            )
            btn.bind(on_press=self.select_option)
            self.option_buttons.append(btn)
            self.add_widget(btn)

        # ---------------- NAVIGATION GRID ----------------
        self.nav_grid = GridLayout(cols=10, size_hint_y=0.25)
        self.add_widget(self.nav_grid)

        # ---------------- FOOTER ----------------
        footer = BoxLayout(size_hint_y=0.1)

        self.prev_btn = Button(text="Previous")
        self.prev_btn.bind(on_press=self.previous_question)

        self.next_btn = Button(text="Next")
        self.next_btn.bind(on_press=self.next_question)

        self.submit_btn = Button(
            text="Submit Exam",
            background_color=(0.8, 0.1, 0.1, 1)
        )
        self.submit_btn.bind(on_press=self.finish_exam)

        footer.add_widget(self.prev_btn)
        footer.add_widget(self.next_btn)
        footer.add_widget(self.submit_btn)

        self.add_widget(footer)

    # -------------------------------------------------

    def start_exam(self, instance):

        exam_type = self.exam_selector.text

        if exam_type not in QUESTION_BANK:
            self.question_label.text = "Select Exam Type"
            return

        total = 20 if exam_type == "BECE" else 60
        self.time_left = 1200 if exam_type == "BECE" else 3600

        self.questions = random.sample(QUESTION_BANK[exam_type], total)
        self.current_index = 0
        self.user_answers.clear()
        self.score = 0

        self.build_navigation()
        self.load_question()

        Clock.schedule_interval(self.update_timer, 1)

    # -------------------------------------------------

    def build_navigation(self):
        self.nav_grid.clear_widgets()
        for i in range(len(self.questions)):
            btn = Button(text=str(i+1))
            btn.bind(on_press=lambda x, idx=i: self.go_to_question(idx))
            self.nav_grid.add_widget(btn)

    # -------------------------------------------------

    def load_question(self):
        q = self.questions[self.current_index]
        self.question_label.text = f"Q{self.current_index+1}. {q['question']}"

        for i, opt in enumerate(q["options"]):
            self.option_buttons[i].text = f"{chr(65+i)}. {opt}"

    # -------------------------------------------------

    def select_option(self, instance):
        selected = instance.text.split(". ", 1)[1]
        self.user_answers[self.current_index] = selected

    # -------------------------------------------------

    def next_question(self, instance):
        if self.current_index < len(self.questions) - 1:
            self.current_index += 1
            self.load_question()

    def previous_question(self, instance):
        if self.current_index > 0:
            self.current_index -= 1
            self.load_question()

    # -------------------------------------------------

    def go_to_question(self, index):
        self.current_index = index
        self.load_question()

    # -------------------------------------------------

    def update_timer(self, dt):
        self.time_left -= 1
        mins = self.time_left // 60
        secs = self.time_left % 60
        self.timer_label.text = f"Time: {mins}:{secs:02d}"

        if self.time_left <= 0:
            self.finish_exam(None)

    # -------------------------------------------------

    def finish_exam(self, instance):

        Clock.unschedule(self.update_timer)

        for i, q in enumerate(self.questions):
            if self.user_answers.get(i) == q["answer"]:
                self.score += 1

        percentage = (self.score / len(self.questions)) * 100

        self.question_label.text = (
            f"Exam Finished\n\n"
            f"Candidate: {self.name_input.text}\n"
            f"Score: {self.score}/{len(self.questions)}\n"
            f"Percentage: {percentage:.2f}%"
        )

        self.save_result(percentage)

    # -------------------------------------------------

    def save_result(self, percentage):
        with open("results.csv", "a", newline="") as f:
            writer = csv.writer(f)
            writer.writerow([
                datetime.now(),
                self.name_input.text,
                self.exam_selector.text,
                self.score,
                percentage
            ])


class TestDrillerApp(App):
    def build(self):
        return TestDrillerUI()


if __name__ == "__main__":
    TestDrillerApp().run()