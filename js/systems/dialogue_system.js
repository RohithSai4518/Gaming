/**
 * Dialogue Engine & NPC Interaction System
 */
class DialogueSystem {
    constructor() {
        this.currentDialogue = null;
        this.currentNode = null;
        this.isOpen = false;
    }

    startDialogue(dialogueTree) {
        this.currentDialogue = dialogueTree;
        this.currentNode = dialogueTree.nodes[0] || null;
        this.isOpen = true;
    }

    selectOption(optionIndex) {
        if (!this.currentNode || !this.currentNode.options) return null;
        const opt = this.currentNode.options[optionIndex];
        if (opt && opt.targetNodeId) {
            this.currentNode = this.currentDialogue.nodes.find(n => n.id === opt.targetNodeId);
        } else {
            this.closeDialogue();
        }
        return this.currentNode;
    }

    closeDialogue() {
        this.isOpen = false;
        this.currentDialogue = null;
        this.currentNode = null;
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { DialogueSystem };
}
