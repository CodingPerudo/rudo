class Game:
    def __init__(self):
        self.colors = ["red", "orange", "yellow", "green", "blue", "black"]
        self.playerCount = 0
        self.doubt = False
        self.last_bet = [0, 0]
        self.turnOrder = []
        self.current_turn_idx = 0
        self.start_session = False
        self.playerCodes = []

        self.playerInfo = {}
        for i, color in enumerate(self.colors):
            self.playerInfo[color] = {
                "dice_nums": [0, 0, 0, 0, 0],
                "displayed_dice": [0, 0, 0, 0, 0],
                "rank": -1,
                "gameStart": False,
                "pos": i,
                "username": "",
                "num_dice_left": 5
            }
