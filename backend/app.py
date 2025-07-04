from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

notes = []

@app.route("/api/notes", methods=["GET", "POST"])
def handle_notes():
    if request.method == "POST":
        data = request.get_json()
        notes.append({"id": len(notes)+1, "text": data["text"]})
        return jsonify({"message": "Note added"}), 201
    return jsonify(notes)

@app.route('/api/notes/<int:note_id>', methods=['DELETE'])
def delete_note(note_id):
    global notes
    notes = [note for note in notes if note['id'] != note_id]
    return jsonify({"message": "Note deleted"}), 200

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5111)
